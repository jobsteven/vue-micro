<template>
  <h3>业务平台</h3>
  <div class="menu">
    <router-link to="/login">登录</router-link>
    <router-link :to="{ name: 'signup' }">注册</router-link>
    <router-link :to="{ name: 'micro', params: { micro_id: 'teaching_sys' } }"
      >教师系统</router-link
    >
    <router-link :to="{ name: 'micro', params: { micro_id: 'courseware_sys' } }"
      >课件系统</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.menu {
  border: 1px solid gray;
}
a {
  padding-right: 20px;
}
</style>
