<template>
  <div class="menu-div">
    <div class="logo-div">Logo</div>
    <div class="menu">
      <ul>
        <ItemMenuComponent />
      </ul>
    </div>
  </div>
</template>

<script>
import ItemMenuComponent from './ItemMenuComponent.vue';

export default {
  name: 'MenuComponent',
  components: { ItemMenuComponent },
};
</script>

<style>
.menu-div {
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 15%;
}

.menu-div .logo-div {
  border: 1px solid green;
  height: 100px;
  width: 100px;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}
</style>
