<template>
  <DashboardComponentVue />
</template>

<script>
import DashboardComponentVue from './views/DashboardComponent.vue';

export default {
  name: 'App',
  components: {
    DashboardComponentVue,
  },
};
</script>

<style>
@media (max-width: 1440px) {
  #app {
    min-height: 640px;
  }
}

@media (max-width: 1024px) {
  #app {
    min-height: 640px;
  }
}

@media (max-width: 768px) {
  #app {
    min-height: 640px;
  }
}
</style>
