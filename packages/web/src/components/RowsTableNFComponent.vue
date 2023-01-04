<template>
  <tr
    class="invoices"
    v-for="dataInvoice in dataInvoices"
    :key="dataInvoice.id"
  >
    <td>{{ dataInvoice.id }}</td>
    <td>{{ dataInvoice.buyer.name }}</td>
    <td>{{ dataInvoice.provider.name }}</td>
    <td>{{ formatDate(dataInvoice.emissionDate) }}</td>
    <td class="value">
      {{ formatValueBRLCurrencyFunction(dataInvoice.value) }}
    </td>
    <td class="status">
      {{ statusOrderFunction(dataInvoice.orderStatusBuyer) }}
    </td>
    <GivesInButtonComponentVue />
  </tr>
</template>

<script>
import GivesInButtonComponentVue from './GivesInButtonComponent.vue';
import {
  statusOrderFunction,
  formatValueBRLCurrencyFunction,
  formatDate,
} from '@/utis/functions';

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
    formatValueBRLCurrencyFunction,
    formatDate,
  },
};
</script>

<style>
.invoices {
  border: 1px solid black;
}

.status,
.value {
  color: #00ad8c;
}

.invoices td {
  text-align: center;
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

@media (max-width: 570px) {
  .invoices td {
    font-size: 8px;
  }
}

@media (max-width: 375px) {
  .invoices td {
    font-size: 4px;
  }
}
</style>
