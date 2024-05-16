import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      firstName: 'Augusto',
      lastName: 'Camargo',
      email: 'teste@1234.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 150
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      },
    ],
    cart: [],
  },
  mutations: {
    storeUser(state, data) {
      console.log('mutations');
      state.user = data;
    },
    addProduct(state, data) {
      state.cart.push(data);
    },
    removeProduct(state, id) {
      // console.log('cart', state.cart);
      const removedItem = state.cart.findIndex(prod => prod.id === id);
      state.cart.splice(removedItem, 1);
      // console.log('cartAtualizado', state.cart);
    },
  },
  getters: { // computed do store
    total(state) {
      return state.cart.length > 0 ? state.cart.reduce((total, item) => total += item.price, 0) : 0;
    }
  },
  actions: {
    // storeUser(context, data) {
    storeUser({commit}, data) { // destruindo o objeto context
    // storeUser() { // teste com a Promise
      console.log('actions')
      commit('storeUser', data);
      // return new Promise((resolve) => {
      //   setTimeout(() => {
      //     resolve();
      //     console.log('actions')
      //     // commit('storeUser', data);
      //   }, 3000)
      // })
    }
  },
})
