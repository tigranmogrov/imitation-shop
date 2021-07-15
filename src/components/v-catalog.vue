<template>
  <div class="catalog">
    <router-link :to="{name: 'Cart',params: { cartData:CART }}">
      <div class="catalog__link">
        Cart: {{ CART.length }}
      </div>
    </router-link>

    <h2 class="title">
      Catalog
    </h2>
    <div class="catalog__list">
      <catalogItem v-for="product in PRODUCTS"
                   :key="product.article"
                   :productData="product"
                   @addCart="addCart"
      />
    </div>
    <loader v-if="lading"></loader>
  </div>
</template>

<script>
import catalogItem from '@/components/v-catalog-item';
import loader from '@/components/v-loader';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "v-catalog",
  data() {
    return {
      lading: true
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    // //Принимаем данные из ребенка
    addCart(data) {
      this.addCart(data)
    },

    ...mapActions([
      'getProducts',
      'addCart'
    ])
  },
  mounted() {
    this.getProducts()
        .then((response) => {
          if (response.data) {
            this.lading = false;
          }
        })
  },
  components: {
    catalogItem,
    loader,
  },
}
</script>

<style scoped lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    margin-top: $margin*5;
  }


}
</style>
