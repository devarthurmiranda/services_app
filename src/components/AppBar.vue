<template>
  <nav class="navbar fixed-top navbar-transparent">
    <div>
      <router-link :to="config.homeRoute" class="navbar-brand">{{ title }}</router-link>
    </div>
    <ul class="navbar-nav ml-auto">
      <li v-for="(route, key) in config.otherRoutes" :key="key" class="nav-item">
        <router-link :to="route" class="nav-link">{{ key }}</router-link>
      </li>
    </ul>
  </nav>
  <div class="space"></div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppBar',
  props: {
    title: {
      type: String,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding-left: 20px;
  padding-right: 20px;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.navbar-nav {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.space {
  height: 95px;
}
</style>