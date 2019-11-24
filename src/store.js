import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        token: null,
        cadastro: null,
        logar: true
    },
    getters: {
        loading(state) { return state.loading },
        isLoggedIn(state) { return state.token !== null }
    },
    actions: {
        showLoading({ commit }) { commit('SHOW_LOADING') },
        hideLoading({ commit }) { commit('HIDE_LOADING') },
        login({ commit }, token) {
            commit('LOGIN', token)
        },
        logout({ commit }) {
            commit('LOGOUT')
        },
        cadastrar_usuario(context) { context.commit('CADASTRAR') },
        logar_usuario(context) {context.commit('LOGAR')}
    },
    mutations: {
        LOGAR(state) {state.logar = true, state.cadastro = false},
        CADASTRAR (state) {state.cadastro = true, state.logar = false},
        SHOW_LOADING(state) { state.loading = true },
        HIDE_LOADING(state) { state.loading = false },
        LOGIN(state, token) {
            state.token = token
            axios.defaults.headers.common['Authorization'] = token
            setTimeout(templateInit, 10); // eslint-disable-line 
        },
        LOGOUT(state) {
            state.token = null
            axios.defaults.headers.common['Authorization'] = null
        }
    },
})
