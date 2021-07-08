import { createRouter, createWebHashHistory } from 'vue-router';
import appRoutes from './app.routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: appRoutes
});

export default router;
