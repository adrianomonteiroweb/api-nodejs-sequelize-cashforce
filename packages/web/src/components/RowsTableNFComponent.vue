<template>
  <tr class="invoices" v-for="dataBuyer in dataBuyers" :key="dataBuyer.id">
    <td>00000</td>
    <td>{{ dataBuyer.name }}</td>
    <td>CEDENTE 002</td>
    <td>12/02/2020</td>
    <td>R$ 1.000,00</td>
    <td>RECEBIDO</td>
    <GivesInButtonComponentVue />
  </tr>
</template>

<script>
import GivesInButtonComponentVue from './GivesInButtonComponent.vue';

export default {
  name: 'RowsTableNFComponent',
  components: {
    GivesInButtonComponentVue,
  },
  props: {
    dataBuyers: {
      required: true,
    },
    dataProviders: {},
  },
};
</script>

<style>
table {
  border-collapse: collapse;
}

.invoices {
  border: 1px solid #dfe2eb;
  border-radius: 6px;
  border-spacing: 0 10px;
}

td {
  margin: 5px;
}
</style>
