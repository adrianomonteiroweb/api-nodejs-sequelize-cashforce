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
  width: 85%;
}

.content-div .bar {
  height: 50px;
  border-bottom: 1px solid black;
  width: 100%;
}

.content-div .content {
  height: 90%;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}
</style>
