<template>
	<div class="page sport-page">
		<iframe ref="iframe" v-bind:src="t188Url"></iframe>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';

	export default {
		name: 'sport-page',

		mounted: function () {
			//在组件中使用 this.$store.dispatch('xxx') 分发 action
			if (this.loginStatus) {   //如果已登录
				if (!this.sportUrl) {
					this.$store.dispatch('getSportUrl');
				}
			} else {
				if (!this.sportTryUrl) {
					this.$store.dispatch('getSportTryUrl');
				}
			}
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		},

	  		sportUrl: function (state) {
	  			return state.sportUrl;
	  		},

	  		sportTryUrl: function (state) {
	  			return state.sportTryUrl;
	  		},

	    	t188Url: function (state) {
				if (this.loginStatus) {
					return this.sportUrl;
				} else {
					return this.sportTryUrl;
				}
	    	}
	  	})
	}
</script>

<style lang="scss" scoped>
	.sport-page {
		height: auto;
		padding-bottom: 100px;

		iframe {
			height: 1200px;
			width: 1024px;
		}
	}
</style>