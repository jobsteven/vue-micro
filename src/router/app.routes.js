import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import About from '../components/About.vue';
import { h } from 'vue';

export default [
  {
    path: '',
    redirect: '/login'
  },
  {
    name: 'login',
    component: Login,
    path: '/login'
  },
  {
    name: 'signup',
    component: SignUp,
    path: '/signup'
  },
  {
    name: 'about',
    component: About,
    path: '/about'
  },
  {
    name: '404',
    path: '/:notfound*',
    component: {
      render() {
        return h('span', `404 Not Found ${this.$route.fullPath}`);
      }
    }
  }
];
