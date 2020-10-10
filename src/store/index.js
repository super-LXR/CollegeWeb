import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//创建对象
const store=new Vuex.Store({
    state:{
      
    // 存储token
Authorization:localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):''
    },
mutations:{
      // 修改token，并将token存入localStorage
      changeLogin(state,user){
            state.Authorization=user.Authorization;
            localStorage.setItem('Authorization',user.Authorization);
      }
}
})

export default store