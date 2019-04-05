<template>
  <div class="navigation">
    <header>
      <router-link to="/">
        <div class="logo">
          <LogoSVG />
        </div>
        <div class="name">
          Carl Danley
        </div>
      </router-link>
    </header>
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="link.url">
            <div class="name">
              {{ link.name }}
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
    <section class="social">
      <a href="https://twitter.com/carldanley">
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
      </a>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line
import LogoSVG from '@/images/logo.svg?import';

export default {
  name: 'navigation',
  props: {
    currentLink: String,
  },
  components: {
    LogoSVG,
  },
  data() {
    return {
      links: [],
    };
  },
  methods: {
    isCurrentLink(url) {
      return (this.currentLink === url);
    },
  },
};
</script>

<style scoped lang="stylus">
.navigation
  width 100%
  display flex
  flex-direction row
  background-color #fff
  border-bottom 2px solid #fb590a

  a
    cursor pointer
    text-decoration none
    font-size 26px
    line-height 26px

  header
    display flex
    align-items center
    border-right 1px solid #fbe7dd

    a
      padding 10px
      color #333
      display flex
      font-family 'Lora', sans-serif
      text-transform uppercase
      align-items center

      &:hover
        background-color #f7eeea

      .logo
        margin-right 10px

        svg
          height auto
          width 40px

          path
            fill #fb590a

      .name
        font-size 20px
        line-height 20px

  nav
    flex 1

    ul
      list-style none
      display flex
      margin 0
      padding 0
      width 100%
      height 100%

      li
        display flex
        align-items center
        margin 0 10px

        a
          flex 1
          align-items center
          font-size 22px
          color #000
          font-family 'Quattrocento', serif

          &:hover
            color #fb590a
            border-bottom 1px solid #fb590a

          &.router-link-exact-active
            cursor default
            color #fb590a

            &:hover
              border-bottom 0

        &:first-child
          margin-left 20px

  section.social
    display flex
    align-items center

    a
      color #333
      font-size 24px
      line-height 24px
      margin-right 20px

      &:hover
        color #fb590a

</style>
