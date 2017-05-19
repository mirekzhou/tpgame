/*
**  ¡¾1¡¿ ActionÌá½»µÄÊÇmutation, ¶ø²»ÊÇÖ±½Ó±ä¸ü×´Ì¬
**  ¡¾2¡¿ Action¿ÉÒÔ°üº¬ÈÎÒâÒì²½²Ù×÷
**  ¡¾3¡¿ ActionµÄ²ÎÊýÊÇcontext
**  ¡¾4¡¿ ÔÚ×é¼þÖÐÊ¹ÓÃ this.$store.dispatch('xxx') ·Ö·¢ action
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

			if (status) {    //Èç¹ûÒÑµÇÂ¼
				dispatch('getUserInfo');           //»ñÈ¡µÇÂ¼ÓÃ»§ÐÅÏ¢

				if (!state.sportUrl) {             //»ñÈ¡ÌåÓýurl
					dispatch('getSportUrl');
				}

				if (!state.phoneBettingUrl) {      //»ñÈ¡µçÍ¶url
					dispatch('getPhoneBettingUrl');
				}
			} else {         //Èç¹ûÎ´µÇÂ¼
				if (!state.sportTryUrl) {          //»ñÈ¡Î´µÇÂ¼ÌåÓýurl
					dispatch('getSportTryUrl');
				}

				if (!state.phoneBettingTryUrl) {   //»ñÈ¡Î´µÇÂ¼µçurl
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
		commit('SET_LOGIN_DIALOG_STATUS', {status: opt.status});
	},

	switchRegisterDialog: function ({commit}, opt) {
		commit('SET_REGISTER_DIALOG_STATUS', {status: opt.status});
	},

	setLoginStatus: function ({commit}, opt) {
		commit('SET_LOGIN_STATUS', {status: opt.status});
	},

	setAlertStatus: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: opt.status});
	}
};