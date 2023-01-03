<template>
  <tr class="invoices" v-for="dataBuyer in dataBuyers" :key="dataBuyer.id">
    <td>00000</td>
    <td>{{ dataBuyer.name }}</td>
    <td>CEDENTE 002</td>
    <td>12/02/2020</td>
    <td>R$ 1.000,00</td>
    <td class="status">RECEBIDO</td>
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
.invoices {
  border: 1px solid #dfe2eb;
}

.status {
  color: #00ad8c;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
  .invoices td {
    font-size: 12px;
  }
}

@media (max-width: 768px) {
  .invoices td {
    font-size: 10px;
  }
}
</style>
