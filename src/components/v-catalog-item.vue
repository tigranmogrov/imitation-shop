<template>
  <div class="catalog-item">
    <div class="catalog-item__inner">
      <div class="catalog-item__img">
        <img :src="productData.image"
             :alt="productData.name">
      </div>
      <h3 class="catalog-item__title">
        {{ productData.name }}
        <span>
          {{ productData.category }}
        </span>
      </h3>
      <p class="text">
        {{ productData.price | roundingPrice('price') }} <span class="catalog-item__price-currency">
        &#8372;
      </span>
      </p>
      <button @click="addCart">
        Add to card
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    // принимаем пропс из родителя
    productData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      obj: null
    }
  },
  computed: {

  },
  methods: {
    addCart() {
      this.$emit('addCart', this.productData)
    }

  },


}
</script>

<style scoped lang="scss">

.catalog-item {
  width: calc(100% / 3);
  padding-left: $padding;
  padding-right: $padding;
  margin-bottom: $margin * 2;

  &:hover {
    .catalog-item__inner {
      box-shadow: 0 0 24px 7px #e0e0e0;
    }
  }

  &__inner {
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding * 2;
    transition: box-shadow .4s;
  }

  &__img {
    display: block;
    width: 70%;
    height: 0;
    padding-bottom: calc(70 / 150 * 100%);
    position: relative;
    margin-bottom: $margin * 2;
    margin-right: auto;
    margin-left: auto;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__title {
    font-size: 18px;
    line-height: 22px;

    span {
      display: block;
      font-size: 12px;
      line-height: 16px;
      color: #5abb90;
      margin-top: ($margin / 2);
    }
  }

  .text {
    word-break: break-all;
  }

  &__price-currency {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: #45896c;
  }
}
</style>
