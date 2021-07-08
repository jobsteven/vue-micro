import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      name: 'alex',
      email: '123.qq.com'
    };
  },
  getters: {
    fullInfo(state) {
      return `${state.name} | ${state.email}`;
    }
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName;
      console.log('changeName is invoked');
    }
  }
});
