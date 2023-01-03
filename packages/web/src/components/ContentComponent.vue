<template setub lang="vue">
  <div class="content-div">
    <div class="bar"></div>
    <div class="content">
      <h1>Notas Fiscais</h1>
      <span>Visualize as notas fiscais que você tem.</span>
      <table class="collapse spacing">
        <HeadTableNFComponentVue />
        <RowsTableNFComponentVue
          :dataBuyers=dataBuyers
          :dataProviders=dataProviders
        />
      </table>
    </div>
  </div>
</template>

<script>
import axiosFunctions from '@/composables/AxiosFunctions';
import HeadTableNFComponentVue from './HeadTableNFComponent.vue';
import RowsTableNFComponentVue from './RowsTableNFComponent.vue';

const fetchBuyers = async () => {
  const fetchResult = await axiosFunctions('http://localhost:3333/buyers');

  const result = await fetchResult;

  return result;
};

const fetchProviders = async () => {
  const fetchResult = await axiosFunctions('http://localhost:3333/providers');

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
      dataBuyers: this.dataBuyers,
      dataProviders: this.dataProviders,
    };
  },
  async created() {
    const buyersResponse = fetchBuyers();
    this.dataBuyers = await buyersResponse;
    const providersResponse = fetchProviders();
    this.dataProviders = await providersResponse;
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
  width: 85%;
}

.content-div .bar {
  height: 20px;
  border-bottom: 1px solid black;
  width: 90%;
}

.content-div .content {
  height: 90%;
}

.content h1 {
  color: #021b51;
}

.content span {
  color: #727d94;
}

.content table {
  margin-top: 20px;
  border-spacing: 20px 20px;
}

.spacing {
  border-collapse: separate;
  border-spacing: 20px;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}
</style>
