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
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
