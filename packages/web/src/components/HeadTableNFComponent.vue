<template>
  <tr>
    <th>NOTA FISCAL</th>
    <th>SACADO</th>
    <th>CEDENTE</th>
    <th>EMISSÃO</th>
    <th>VALOR</th>
    <th class="status-th" colspan="2">STATUS</th>
  </tr>
</template>

<script>
export default {
  name: 'HeadTableNFComponent',
};
</script>

<style>
th {
  color: #dfe2eb;
}

.status-th {
  text-align: left;
}

@media (max-width: 1440px) {
  th {
    font-size: large;
  }
}

@media (max-width: 1024px) {
  th {
    font-size: medium;
  }
}

@media (max-width: 768px) {
  th {
    font-size: small;
  }
}

@media (max-width: 570px) {
  th {
    font-size: 10px;
  }
}

@media (max-width: 425px) {
  th {
    font-size: 9px;
  }
}

@media (max-width: 375px) {
  th {
    font-size: 6px;
  }
}
</style>
