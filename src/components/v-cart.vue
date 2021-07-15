<template>
  <div class="cart">
    <router-link :to="{name: 'Catalog'}">
      <div class="catalog__link">
        Back to Catalog
      </div>
    </router-link>
    <h2 class="title">Cart</h2>
    <div class="title offset"
         v-if="!cartData.length">
      Cart is empty no products found
    </div>
    <div class="cart__list">
      <cartItem
          v-for="(item,index) in cartData"
          :key="item.article"
          :cartItemData="item"
          @deleteCartItem="deleteCartItem(index)"
          @decrement="decrement(index)"
          @increment="increment(index)"
      />
    </div>

    <div class="cart__total">

      <p>
        <span> Total:</span> {{ cartTotal }} &#8372;
      </p>
    </div>

  </div>
</template>

<script>
import cartItem from '@/components/v-cart-item'
import {mapActions} from 'vuex';

export default {
  name: "v-cart",
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    cartTotal() {
      let result = [];
      if (this.cartData.length) {
        for (let item of this.cartData) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
        return result.toFixed(2);
      } else {
        return 0
      }
    }
  },
  methods: {
    ...mapActions([
      'deleteCart',
      'decrementItem',
      'incrementItem',
    ]),
    increment(index) {
      this.incrementItem(index);
    },
    decrement(index) {
      this.decrement(index);
    },
    deleteCartItem(index) {
      this.deleteCart(index)
    }
  },
  components: {cartItem,}
}
</script>

<style scoped lang="scss">
.cart {

  &__list {
    display: block;
    margin-top: $margin*5;
  }

  .offset {
    margin-top: $margin*4;
  }

  &__total {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: $padding*5;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #42b983;
    color: #fff;
    font-size: 16px;
    line-height: 20px;

    span {
      margin-right: 10px;
      font-size: 20px;
      line-height: 24px;
      font-weight: 700;
    }
  }
}
</style>
