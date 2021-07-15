<template>
  <div class="cart-item">
    <div class="cart-item__img-wrap">
      <div class="cart-item__img">
        <img :src="cartItemData.image"
             :alt="cartItemData.name">
      </div>
    </div>
    <div class="cart-item__info">
      <div class="cart-item__coll">
        <h3 class="cart-item__title">
          {{ cartItemData.name }}
          <span>
          {{ cartItemData.category }}
        </span>
        </h3>
        <p class="text">
          {{ cartItemData.price | roundingPrice('price') }} <span class="cart-item__price-currency">
        &#8372;
      </span>
        </p>
        <p class="text">
          {{ cartItemData.article }}
        </p>
      </div>
      <div class="cart-item__coll">
        <div class="cart-item__quantity">
          <button @click="decrementItem">-</button>
          {{ cartItemData.quantity }}
          <button @click="incrementItem">+</button>
        </div>
      </div>
      <div class="cart-item__coll">
        <button @click="deleteCartItem">
          Delete
        </button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "v-cart-item",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  methods: {

    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    },
    deleteCartItem() {
      this.$emit('deleteCartItem')
    }
  },
  created() {

  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1);

  },
}
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: $margin*4;
  //border: 1px solid #000;
  padding: $padding* 2;
  box-shadow: 0 0 8px 0 #c7c7c7;

  &__img-wrap {
    width: 20%;
  }

  &__img {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: calc(100 / 160 * 100%);
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__info {
    width: calc(100% - 20%);
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  &__coll {
    width: calc(100% / 3);
  }

  &__title {
    font-size: 16px;
    line-height: 20px;
  }

  &__price-currency {
    font-size: 14px;
    line-height: 18px;
  }

  &__quantity {
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    box-shadow: 0 0 5px 0 #e0e0e0;
    padding: ($padding * 1.197) ($padding*2);

    button {
      padding: 0;
      margin: 0 $margin;
      width: 20px;
      font-size: 20px;
    }
  }
}
</style>
