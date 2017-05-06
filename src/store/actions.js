/*
**  ��1�� Action�ύ����mutation, ������ֱ�ӱ��״̬
**  ��2�� Action���԰��������첽����
**  ��3�� Action�Ĳ�����context
**  ��4�� �������ʹ�� this.$store.dispatch('xxx') �ַ� action
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

			if (status) {    //����ѵ�¼
				dispatch('getUserInfo');           //��ȡ��¼�û���Ϣ

				if (!state.sportUrl) {             //��ȡ����url
					dispatch('getSportUrl');
				}

				if (!state.phoneBettingUrl) {      //��ȡ��Ͷurl
					dispatch('getPhoneBettingUrl');
				}
			} else {         //���δ��¼
				if (!state.sportTryUrl) {          //��ȡδ��¼����url
					dispatch('getSportTryUrl');
				}

				if (!state.phoneBettingTryUrl) {   //��ȡδ��¼��url
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