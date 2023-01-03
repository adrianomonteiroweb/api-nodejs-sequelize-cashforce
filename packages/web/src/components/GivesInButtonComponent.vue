<template setub lang="vue">
<button>Dados do cedente</button>
</template>

<script>
export default {
  name: 'GivesInButtonComponent',
};
</script>

<style>
button {
  background-color: #fff;
  border: 1px solid #dfe2eb;
  border-radius: 20px;
  font-size: 8px;
  margin: 5px 5px 5px 50px;
  padding: 5px;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
  button {
    font-size: 8px;
  }
}

@media (max-width: 768px) {
  button {
    font-size: 8px;
    width: 80px;
  }
}
</style>
