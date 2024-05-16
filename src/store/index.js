import { createStore } from 'vuex';

export default createStore({
  state: {
    user: {
      firstName: 'Augusto',
      lastName: 'Camargo',
      email: 'teste@1234.com'
    },
    products: [],
    cart: {},
  },
  mutations: {
    storeUser(state, data) {
      console.log('data', data);
      console.log('storeUser', state.user);
      state.user = data;
      console.log('atualizado', state.user);
    },
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
