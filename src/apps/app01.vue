<template>
  <span>教师系统</span><br />
  <ol>
    <router-link :to="{ name: 'menu1' }" append>菜单一</router-link>
    <router-link :to="{ name: 'menu2' }">菜单一</router-link>
  </ol>
  <router-view></router-view>
</template>

<script>
import routes from './app01.routes';

export default {
  id: 'app01',
  routes
};
</script>

<style scoped>
span {
  color: green;
}
</style>
