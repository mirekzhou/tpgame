import Vue from 'vue';
import Vuex from 'vuex';


/*
** 【1】 改变store中的状态的唯一途径就是现实的提交(commit) mutations， 不要直接改变store中的状态!!!!
**     eg: store.commit('inrement');
**
*/
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 0
	},

	mutations: {
		increment: function (state) {
			state.count++;
		}
	}
});

