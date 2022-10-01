import type { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuard } from './guard'

import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routesByPages = setupLayouts(generatedRoutes)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
    name: 'home',
    meta: { hidden: true },
  },
  ...routesByPages
]

const router = createRouter({
  routes,
  history: createWebHistory('what-is-my-blog'), 
});

export async function setupRouter(app: App) {
  app.use(router)
  createRouterGuard(router)
  await router.isReady()
}
