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
  button {
    font-size: 12px;
    width: 130px;
  }
}

@media (max-width: 1024px) {
  button {
    font-size: 9px;
    width: 90px;
  }
}

@media (max-width: 768px) {
  button {
    font-size: 12px;
    width: 120px;
  }
}

@media (max-width: 600px) {
  button {
    font-size: 10px;
    width: 100px;
  }
}

@media (max-width: 570px) {
  button {
    font-size: 5px;
    width: 60px;
  }
}

@media (max-width: 375px) {
  button {
    font-size: 4px;
    width: 45px;
  }
}
</style>
