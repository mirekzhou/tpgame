/*
**  【1】 Action提交的是mutation, 而不是直接变更状态
**  【2】 Action可以包含任意异步操作
**  【3】 Action的参数是context
**  【4】 在组件中使用 this.$store.dispatch('xxx') 分发 action
*/

import Config from '../config/config.js';
import Service from '../service/service.js';

export default {
	getLoginStatus: function ({state, dispatch, commit}) {
		var status;
    	var opt = {
    		url: Config.urls.loginStatus
    	};

		Service.get(opt, function (data) {
			status = (data == 0)?true : false;
			commit('SET_LOGIN_STATUS', {status: status});

			if (status) {    //如果已登录
				dispatch('getUserInfo');           //获取登录用户信息

				if (!state.sportUrl) {             //获取体育url
					dispatch('getSportUrl');
				}

				if (!state.phoneBettingUrl) {      //获取电投url
					dispatch('getPhoneBettingUrl');
				}
			} else {         //如果未登录
				if (!state.sportTryUrl) {          //获取未登录体育url
					dispatch('getSportTryUrl');
				}

				if (!state.phoneBettingTryUrl) {   //获取未登录电url
					dispatch('getPhoneBettingTryUrl');
				}
			}
		});
	},

	getUserInfo: function (context) {
		var opt = {
			url: Config.urls.getLoginInUserInfo
		};

		Service.get(opt, function (data) {
			context.commit('SET_LOGIN_USER_INFO', {data: data});
		});
	},

	getSportUrl: function ({commit}) {
    	var opt = {
			url: Config.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};
		
		Service.get(opt, function (data) {
			commit('SET_SPORT_URL', {url: data});
		});
	},

	getSportTryUrl: function ({commit}) {
		var opt = {
			url: Config.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};

		Service.get(opt, function (data) {
			commit('SET_SPORT_TRY_URL', {url: data});
		});
	},

	getPhoneBettingUrl: function ({commit}) {
    	var opt = {
			url: Config.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'SCM',
				gameType: 'casino'
			}
		};
		
		Service.get(opt, function (data) {
			commit('SET_PHONE_BETTING_URL', {url: data});
		});
	},

	getPhoneBettingTryUrl: function ({commit}) {
		var opt = {
			url: Config.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'SCM',
				gameType: 'casino'
			}
		};

		Service.get(opt, function (data) {
			commit('SET_PHONE_BETTING_TRY_URL', {url: data});
		});
	},

	switchLoginDialog: function ({commit}, opt) {
		console.log('opt = ' + JSON.stringify(opt));
		commit('SET_LOGIN_DIALOG_STATUS', {status: opt.status});
	}
};