import Vue from 'vue';
import Router from 'vue-router';
import ArticleRoute from '@/routes/article';
import HomeRoute from '@/routes/home';
import NotFoundRoute from '@/routes/not-found';
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
