import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/root/HomeView.vue';
import Layout from '@/components/Layout.vue';
import i18n from '@/locales';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: { title: 'title.home', active: 'home' }
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/root/AboutView.vue'),
          meta: { title: 'title.about', active: 'about' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      meta: { title: 'title.notFound' },
      component: () => import('@/views/errors/NotFound.vue')
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.title) {
    const lang: string = to.meta.title as string
    document.title = `${i18n.global.t(lang)} - Site Template`
  }

  next()
})

router.afterEach(() => window.scrollTo(0, 0));

export default router;
