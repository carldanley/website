import Vue from 'vue';
import Router from 'vue-router';
import ArticleRoute from '@/routes/article';
import HomeRoute from '@/routes/home';
import NotFoundRoute from '@/routes/not-found';
import TagsRoute from '@/routes/tags';
import articles from '@/articles';
import _ from 'lodash';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeRoute,
    }, {
      path: '/tags/:tag',
      name: 'tags',
      component: TagsRoute,
      props(to) {
        const tag = to.params.tag.toLowerCase();
        const foundArticles = _.filter(articles, (article) => {
          const tags = _.map(article.tags, tmpTag => tmpTag.toLowerCase());

          return tags.includes(tag);
        });

        return {
          tag,
          foundArticles,
        };
      },
    }, {
      path: '/blog/:id',
      name: 'Blog',
      component: ArticleRoute,
      beforeEnter(to, from, next) {
        const article = _.find(articles, tmp => (tmp.slug === to.params.id));

        if (!article) {
          return next({
            name: 'not-found',
            params: [to.path],
            replace: true,
          });
        }

        return next();
      },
      props(to) {
        const currentIndex = _.findIndex(articles, tmp => (tmp.slug === to.params.id));
        const nextIndex = currentIndex - 1;
        const previousIndex = currentIndex + 1;

        let nextArticle = null;
        let previousArticle = null;
        let currentArticle = null;

        if (nextIndex >= 0) {
          nextArticle = articles[nextIndex];
        }

        if (previousIndex < articles.length) {
          previousArticle = articles[previousIndex];
        }

        if (currentIndex > -1) {
          currentArticle = articles[currentIndex];
        }

        return {
          nextArticle,
          currentArticle,
          previousArticle,
        };
      },
    }, {
      path: '*',
      name: 'not-found',
      component: NotFoundRoute,
    },
  ],
});

export default router;
