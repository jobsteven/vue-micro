<template>
  <h3>biz platfrom</h3>
  <div class="menu">
    <router-link to="/login">login</router-link>
    <router-link :to="{ name: 'signup' }">signup</router-link>
    <router-link :to="{ name: 'micro', params: { micro_id: 'teaching_sys' } }"
      >micro-app-01</router-link
    >
    <router-link :to="{ name: 'micro', params: { micro_id: 'courseware_sys' } }"
      >micro-app-02</router-link
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
