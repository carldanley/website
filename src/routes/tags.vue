<template>
  <div class="tags" v-title="'Tags | Carl Danley'">
    <navigation current-link="/tags"></navigation>

    <article>
      <section v-if="!hasArticles" class="no-tags">
        <div class="caption">Nothing was found with the tag "{{ tag }}"</div>
        <div class="subcaption">Hopefully, you'll have better luck next time!</div>
        <router-link to="/">&xlarr; Go to home</router-link>
      </section>

      <section v-if="hasArticles" class="tags">
        <div class="caption">Found {{ articleCountLabel }} with the tag "{{ tag }}"</div>

        <article v-for="article in foundArticles" :key="article.slug">
          <router-link :to="articleLink(article.slug)">
            <div class="title">{{ article.title }}</div>
          </router-link>
          <div class="date">{{ article.date | dateString }}</div>
          <div class="tags">
            <font-awesome-icon icon="tags"></font-awesome-icon>
            <router-link v-for="(tag, index) in article.tags" :key="index" :to="tagLink(tag)">{{ tag }}</router-link>
          </div>
        </article>
      </section>
    </article>
  </div>
</template>

<script>
import moment from 'moment';
import TitleDirective from '@/directives/title';
import Navigation from '@/components/navigation';

export default {
  name: 'tags',
  props: {
    tag: String,
    foundArticles: Array,
  },
  components: {
    Navigation,
  },
  computed: {
    hasArticles() {
      return this.foundArticles.length > 0;
    },
    articleCountLabel() {
      const count = this.foundArticles.length;
      let pluralization = 's';

      if (count === 1) {
        pluralization = '';
      }

      return `${count} article${pluralization}`;
    },
  },
  filters: {
    dateString(value) {
      return moment(value, 'X').format('LL');
    },
  },
  directives: {
    TitleDirective,
  },
  methods: {
    articleLink(value) {
      return `/blog/${value}`;
    },
    tagLink(value) {
      return `/tags/${value}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.tags

  article
    margin 100px auto

    section.no-tags
      text-align center

      .caption
        font-size 40px
        line-height 40px
        margin-bottom 20px

      .subcaption
        font-size 20px
        line-height 30px
        margin-bottom 50px

      a
        font-size 20px
        line-height 20px
        text-decoration none
        color #fb590a

        &:hover
          border-bottom 1px solid #fb590a

    section.tags
      text-align center

      .caption
        font-size 40px
        line-height 40px
        margin-bottom 20px

      article
        margin-bottom 40px
        text-align center
        width inherit

        a
          margin-bottom 10px
          color #333
          text-decoration none
          margin-bottom 10px

          .title
            font-size 32px
            line-height 42px
            display inline-block

          &:hover
            color #fb590a

        .date
          margin-bottom 5px
          color #666

        .tags

          svg
            color #fb590a
            font-size 12px
            line-height 12px
            margin-right 10px

          a
            margin-right 6px
            margin-bottom 10px
            color #666

            &:hover
              border-bottom 1px solid #fb590a
              color #fb590a
</style>
