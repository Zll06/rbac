/*
 * @Author: your name
 * @Date: 2022-03-13 16:41:50
 * @LastEditTime: 2022-03-13 21:54:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \rbac\src\store\index.js
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        rightList: JSON.parse(sessionStorage.getItem('rightList') || '[]')
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
        setRightList(state, data) {
            state.rightList = data
            sessionStorage.setItem('rightList', JSON.stringify(data))
        }
    }
});

export default store;