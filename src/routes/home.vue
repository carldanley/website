<template>
  <div class="home" v-title="'Home | Carl Danley'">
    <navigation current-link="/home"></navigation>
    <section class="title">
      <span>Recent Blog Posts</span>
    </section>
    <section class="articles">
      <article v-for="article in articles" :key="article.slug">
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
  </div>
</template>

<script>
import moment from 'moment';
import TitleDirective from '@/directives/title';
import Navigation from '@/components/navigation';
import articles from '@/articles';

export default {
  name: 'home',
  components: {
    Navigation,
  },
  data() {
    const recentArticles = [];

    for (let i = 0; i < 5; i += 1) {
      if (articles[i]) {
        recentArticles.push(articles[i]);
      }
    }

    return {
      articles: recentArticles,
    };
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
.home

  section.title
    width 800px
    margin auto
    text-align center
    padding 50px 0 30px 0
    font-size 40px
    line-height 40px
    color #444

    span
      padding 0 60px 40px 60px
      border-bottom 1px dashed #aaa

  section.articles
    width 800px
    margin auto
    display flex
    flex-direction column
    justify-items center
    align-items center
    padding 60px 0

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
