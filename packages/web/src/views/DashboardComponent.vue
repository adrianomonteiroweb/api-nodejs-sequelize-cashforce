<template>
  <div class="dashboard-div">
    <MenuComponentVue />
    <ContentComponent />
  </div>
</template>

<script>
import ContentComponent from '../components/ContentComponent.vue';
import MenuComponentVue from '../components/MenuComponent.vue';

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
  justify-content: space-between;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .dashboard-div {
    flex-direction: column;
  }
}
</style>
