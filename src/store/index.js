import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        setProducts: (state, products) => {
            state.products = products;
        },
        setCart: (state, product) => {
            if (state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.article === product.article) {
                        isProductExists = true;
                        item.quantity++;
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product);
                }
            } else {
                state.cart.push(product);
            }
        },

        increment: (state, index) => {
            state.cart[index].quantity++;
        },
        decrement: (state, index) => {
            if (state.cart.quantity > 1) {
                state.cart[index].quantity--;
            }
        },

        removeCart: (state, index) => {
            state.cart.splice(index, 1)
        },
    },
    actions: {
        getProducts({commit}) {
            return Axios('http://localhost:3000/products', {
                method: 'GET',
            })
                .then((products) => {
                    commit('setProducts', products.data)
                    return products;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        addCart({commit}, product) {
            return commit('setCart', product)
        },
        decrementItem({commit}, index) {
            return commit('decrement', index)
        },
        incrementItem({commit}, index) {
            return commit('increment', index)
        },
        deleteCart({commit}, index) {
            commit('removeCart', index)
        },
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart
        }
    },
    modules: {}
})
