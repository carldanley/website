<template>
  <div class="not-found" v-title="'Not Found | Carl Danley'">
    <navigation></navigation>
    <article>
      <div class="numbers">404</div>
      <div class="caption">Ugh. There seems to be an issue...</div>
      <div class="subcaption">The page you're looking for might not exist anymore ...</div>
      <router-link to="/">&xlarr; Go to home</router-link>
    </article>
  </div>
</template>

<script>
import Navigation from '@/components/navigation';
import TitleDirective from '@/directives/title';

export default {
  name: 'not-found',
  components: {
    Navigation,
  },
  directives: {
    TitleDirective,
  },
};
</script>

<style lang="stylus" scoped>
.not-found

  article
    margin 100px auto
    text-align center

    .numbers
      font-size 200px
      line-height 200px
      color #fb590a
      margin-bottom 40px
      opacity 0.8

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
</style>
