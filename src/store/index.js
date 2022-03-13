import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        city:"城市名"
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        getCityFn(state){
            return state.city;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{

    },
    // 4. mutations
    mutations:{

    }
});

export default store;