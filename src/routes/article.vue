<template>
  <div @keydown="onKeyDown" class="article" v-title="pageTitle">
    <navigation current-link="/"></navigation>
    <article v-if="currentArticle">
      <section class="nav">
        <div class="nav-button next" v-if="nextArticle">
          <router-link :to="nextArticleURL">
            &xlarr; Next Article
          </router-link>
        </div>
        <div class="nav-button previous" v-if="previousArticle">
          <router-link :to="previousArticleURL">
            Previous Article &xrarr;
          </router-link>
        </div>
      </section>
      <section class="meta">
        <div class="title">{{ currentArticle.title }}</div>
        <div class="date">{{ currentArticle.date | dateString }}</div>
      </section>
      <section class="content" v-html="currentArticle.content"></section>
    </article>
  </div>
</template>

<script>
import moment from 'moment';
import highlightJS from 'highlight.js';
import TitleDirective from '@/directives/title';
import Navigation from '@/components/navigation';

export default {
  name: 'blog',
  props: {
    previousArticle: Object,
    currentArticle: Object,
    nextArticle: Object,
  },
  created() {
    window.addEventListener('keydown', this.onKeyDown);
  },
  components: {
    Navigation,
  },
  computed: {
    previousArticleURL() {
      if (!this.previousArticle) {
        return '';
      }

      return `/blog/${this.previousArticle.slug}`;
    },
    nextArticleURL() {
      if (!this.nextArticle) {
        return '';
      }

      return `/blog/${this.nextArticle.slug}`;
    },
    pageTitle() {
      return `${this.currentArticle.title} | Carl Danley`;
    },
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeyDown);
  },
  directives: {
    TitleDirective,
  },
  filters: {
    dateString(value) {
      return moment(value, 'X').format('LL');
    },
  },
  methods: {
    onKeyDown(event) {
      const { keyCode } = event;

      if (keyCode === 39 && this.previousArticle) {
        this.$router.push(this.previousArticleURL);
      } else if (keyCode === 37 && this.nextArticle) {
        this.$router.push(this.nextArticleURL);
      }
    },
  },
  mounted() {
    document.querySelectorAll('article pre code').forEach(block => highlightJS.highlightBlock(block));
  },
};
</script>

<style lang="stylus" scoped>
.article

  section.nav
    display flex

    .nav-button
      cursor pointer
      display flex
      flex 1

      a
        text-decoration none
        color #333
        margin 10px
        border-bottom 1px solid transparent
        display flex

        &:hover
          color #fb590a

      &.previous
        justify-content flex-end

  section.meta
    border-bottom 1px dashed #a4a4a4
    display flex
    flex-direction column
    padding 30px 0 60px 0
    text-align center

    .title
      margin auto
      font-size 60px
      line-height 60px

    .date
      margin-top 10px
</style>
