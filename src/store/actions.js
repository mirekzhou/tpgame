/*
**  【1】 Action提交的是mutation, 而不是直接变更状态
**  【2】 Action可以包含任意异步操作
*/

import Config from '../config/config.js';
import Service from '../service/service.js';

export default {
	getLoginStatus: function (context) {
		var status;
    	var opt = {
    		url: Config.urls.loginStatus
    	};

		Service.get(opt, function (data) {
			status = (data == 0)?true : false;
			context.commit('SET_LOGIN_STATUS', {status: status});
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

	getSportUrl: function (context) {
    	var opt = {
			url: Config.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};
		
		Service.get(opt, function (data) {
			context.commit('SET_SPORT_URL', {url: data});
		});
	},

	getSportTryUrl: function (context) {
		var opt = {
			url: Config.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};

		Service.get(opt, function (data) {
			context.commit('SET_SPORT_TRY_URL', {url: data});
		});
	}
};