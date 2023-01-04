<template setub lang="vue">
  <div class="content-div">
    <div class="bar"></div>
    <div class="content">
      <h1>Notas Fiscais</h1>
      <span>Visualize as notas fiscais que você tem.</span>
      <table class="collapse spacing">
        <HeadTableNFComponentVue />
        <RowsTableNFComponentVue
          :dataInvoices=dataInvoices
        />
      </table>
    </div>
  </div>
</template>

<script>
import axiosFunctions from '@/composables/AxiosFunctions';
import HeadTableNFComponentVue from './HeadTableNFComponent.vue';
import RowsTableNFComponentVue from './RowsTableNFComponent.vue';

const fetchInvoices = async () => {
  const fetchResult = await axiosFunctions('http://localhost:3333/invoices');

  const result = await fetchResult;

  return result;
};

export default {
  name: 'ContentComponent',
  components: {
    HeadTableNFComponentVue,
    RowsTableNFComponentVue,
  },
  data() {
    return {
      dataInvoices: this.dataInvoices,
    };
  },
  async created() {
    const invoicesResponse = fetchInvoices();
    this.dataInvoices = await invoicesResponse;
  },
};
</script>

<style>
.content-div {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 500px;
  justify-content: center;
  width: 100%;
  padding: 5px;
}

.content-div .bar {
  height: 5%;
  border-bottom: 1px solid #727d94;
  width: 98%;
  padding: 5px;
}

.content-div .content {
  height: 90%;
  width: 100%;
  padding: 0px;
}

.content h1 {
  color: #021b51;
  font-size: 24px;
}

.content span {
  color: #727d94;
  font-size: 18px;
}

.content table {
  margin-top: 20px;
  border-spacing: 5px 0px;
  width: 95%;
  padding: 5px;
}

.spacing {
  border-collapse: separate;
  border-spacing: 5px 0px;
}

@media (max-width: 768px) {
  .content-div {
    width: 95%;
  }

  .content h1 {
    font-size: 20px;
  }

  .content span {
    font-size: 16px;
  }
}

@media (max-width: 425px) {
  .content h1 {
    font-size: 14px;
  }

  .content span {
    font-size: 12px;
  }
}

@media (max-width: 375px) {
  .content h1 {
    font-size: 12px;
  }

  .content span {
    font-size: 10px;
  }
}
</style>
