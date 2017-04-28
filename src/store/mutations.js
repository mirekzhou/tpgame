/*
**  【1】 mutation必须同步执行, 所以异步请求不能写在mutation里面
*/

export default {
	SET_LOGIN_STATUS: function (state, opt) {
		state.loginStatus = opt.status;
	},

	SET_LOGIN_USER_INFO: function (state, opt) {
		state.loginUserInfo = opt.data;
	},

	SET_SPORT_URL: function (state, opt) {
		state.sportUrl = opt.url;
	},

	SET_SPORT_TRY_URL: function (state, opt) {
		state.sportTryUrl = opt.url;
	}
};