<template>
  <div class="content-div">
    <div class="bar"></div>
    <div class="content">
      <h1>Content</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent',
};
</script>

<style>
.content-div {
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  width: 400px;
}

.content-div .bar {
  height: 50px;
  border-bottom: 1px solid black;
  width: 100%;
}

.content-div .content {
  height: 90%;
}
</style>
