<template>
  <div class="menu-div">
    <div class="logo-div">Logo</div>
    <div class="menu">
      <h1>Menu</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
};
</script>

<style>
.menu-div {
  align-items: center;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 200px;
}

.menu-div .logo-div {
  border: 1px solid green;
  height: 100px;
  width: 100px;
}
</style>
