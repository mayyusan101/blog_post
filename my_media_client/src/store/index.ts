import { createStore } from 'vuex'

export default createStore({
  state: {
    token : '',
    userData : {},
  },
  getters: {
    getUserData : () => localStorage.getItem("userData"),
  },
  mutations: {
  },
  actions: {
    setToken : ({state},value) => {
      state.token = value             //put
      localStorage.setItem("token",value);
    },
    setUserData : ({state},value) => {
      state.userData = value;
      localStorage.setItem("userData",JSON.stringify(value.id));    //store user id
    },
  },
  modules: {
  }
})
