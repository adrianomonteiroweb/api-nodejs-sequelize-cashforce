<template>
  <div class="dashboard-div">
    <MenuComponentVue />
    <ContentComponent />
  </div>
</template>

<script>
import ContentComponent from './ContentComponent.vue';
import MenuComponentVue from './MenuComponent.vue';

export default {
  name: 'DashboardComponent',
  components: {
    MenuComponentVue,
    ContentComponent,
  },
};
</script>

<style>
.dashboard-div {
  display: flex;
}
</style>
