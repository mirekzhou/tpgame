// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   //名字不能大写, 不知道为什么
import store from './store' 

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,               //es6的语法, 等同于： router:router
	store,                //es6的语法, 等同于： store:store
	template: '<App/>',
	components: { App }
});


/*
** 引入Element UI
*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);