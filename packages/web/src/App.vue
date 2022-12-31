<template>
  <DashboardComponentVue />
</template>

<script>
import DashboardComponentVue from './components/DashboardComponent.vue';

export default {
  name: 'App',
  components: {
    DashboardComponentVue,
  },
};
</script>

<style>
#app {
  border: 1px solid black;
}

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
