<template>
  <div class="menu-div">
    <div class="logo-div">
      <img
        src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg"
        alt="cashforce"
      />
    </div>
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
  background-color: #fbfdfe;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 20%;
}

.menu-div .logo-div {
  height: 100px;
  width: 100px;
}

.menu ul {
  border-left: 2px solid #00ad8c;
  height: 30px;
  list-style-type: none;
}

@media (max-width: 1440px) {
  .logo-div img {
    margin: 5px;
    width: 100px;
  }
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
  .menu-div {
    align-items: center;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    width: 95%;
    padding: 10px;
  }

  .menu-div .logo-div {
    height: 30px;
  }

  .menu ul {
    border: 0;
    border-bottom: 2px solid #00ad8c;
  }
}
</style>
