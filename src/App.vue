<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/Nav.vue';

export default defineComponent({
  name: 'App',
  components: {
    Nav
  }
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
