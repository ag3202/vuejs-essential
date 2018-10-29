import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

const state = {
    user: ls.getItem('user'),
    // 添加 auth 来保存当前用户的登录信息
    auth: ls.getItem('auth'),
    count: 12
}
const getters = {
    count:function(state){
        return state.count +=100;
    }
}
const mutations = {
    UPDATE_USER(state, user) {
        state.user = user
        ls.setItem('user', user)
    },
    UPDATE_AUTH(state, auth) {
        state.auth = auth
        ls.setItem('auth', auth)
    },
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count-=1;
    }
}

const actions = {
    login({ commit }, user) {
        if (user) commit('UPDATE_USER', user)
        // 更新当前用户的登录状态为已登录
        commit('UPDATE_AUTH', true)
        router.push('/')
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store