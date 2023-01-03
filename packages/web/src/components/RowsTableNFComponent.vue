<template>
  <tr
    class="invoices"
    v-for="dataInvoice in dataInvoices"
    :key="dataInvoice.id"
  >
    <td>{{ dataInvoice.id }}</td>
    <td>{{ dataInvoice.buyer.name }}</td>
    <td>{{ dataInvoice.provider.name }}</td>
    <td>{{ dataInvoice.emissionDate }}</td>
    <td>{{ dataInvoice.value }}</td>
    <td class="status">
      {{ statusOrderFunction(dataInvoice.orderStatusBuyer) }}
    </td>
    <GivesInButtonComponentVue />
  </tr>
</template>

<script>
import GivesInButtonComponentVue from './GivesInButtonComponent.vue';
import { statusOrderFunction } from '@/utis/functions';

export default {
  name: 'RowsTableNFComponent',
  components: {
    GivesInButtonComponentVue,
  },
  props: {
    dataInvoices: {
      required: true,
    },
  },
  methods: {
    statusOrderFunction,
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
