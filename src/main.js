import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import micro from './micro';

const app = createApp(App);

micro(router, {
  teaching_sys: 'https://wxw:3000/micro/src/apps/app01.vue',
  courseware_sys: 'https://wxw:3000/micro/src/apps/app02.vue'
});

app.use(router);
app.use(store);
app.config.errorHandler = (err, vm, info) => {
  console.log('->', err, vm, info);
};

app.mount('#app');
