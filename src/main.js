// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import store from './store'////

import axios from 'axios'
import VueAxios from 'vue-axios'
// import { config } from 'vue/types/umd'
Vue.prototype.bus = new Vue()
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.config.productionTip = false

Vue.prototype.$store=store//
//http://pi6urf.natappfree.cc
//http://dxd.natapp1.cc
axios.defaults.baseURL = 'http://dxd.natapp1.cc'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//
  components: { App },
  template: '<App/>'
})

// 添加请求拦截器，在请求头中加token/异步请求前在header里加入token
axios.interceptors.request.use(
  config =>{
    if(config.url==='/jwt/login'||config.url==='/jwt'){  //如果是登录和注册操作，则不需要携带header里面的token

    }else{
    if(localStorage.getItem('Authorization')){
      config.headers.Authorization =localStorage.getItem('Authorization ');
    }
  }
    return config;
  },
  error =>{
return Promise.reject(error);
  }
);

// 异步请求后，判断token是否过期

axios.interceptors.response.use(

  response =>{
    return response;
  },

  error => {

    if(error.response){
      switch (error.response.status) {
        case 401:
          localStorage.removeItem('Authorization');

          this.$router.push('/Logging');

      }

    }

  }

)