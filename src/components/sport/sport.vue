<template>
	<div class="page sport-page">
		<div class="page-wrapper sport-page-wrapper">
			<ul>
				<li class="sport-bbin">
					<div class="name">BBIN体育</div>
					<div class="li-overlay"></div>
				</li>

				<li class="sport-im">
					<div class="name">IM体育</div>
					<div class="li-overlay"></div>
				</li>
			</ul>
		</div>
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
		background: url(../../assets/sport-bg.png) center top no-repeat;
		padding: 735px 0 30px;
		position: relative;

		.sport-page-wrapper {
			width: 1140px;
			height: 100%;
			margin: 0 auto;
			position: absolute;
			top: 105px;
			right: 10%;
			text-align: right;

			ul {
				list-style: none;
				display: inline-block;

				li {
					width: 310px;
					height: 277px;
					margin-bottom: 76px;
					position: relative;

					.li-overlay {
						background-color: rgba(10, 9, 39, 0.4);
						position: absolute;
						left: 0;
						right: 0;
						width: 100%;
						height: 100%;
					}

					.name {
						cursor: pointer;
						font-size: 28px;
						width: 100%;
						height: 75px;
						line-height: 75px;
						color: #9fa1ad;
						background-color: rgba(6, 5, 27, .78);
						position: absolute;
						bottom: 0;
						left: 0;
						text-align: center;
					}

					&:hover {
						.li-overlay {
							display: none;
						}

						.name {
							color: #FFF;
						}
					}
				}

				.sport-bbin {
					background-image: url(../../assets/sport-bbin.png);
				}

				.sport-im {
					background-image: url(../../assets/sport-im.png);
				}
			}
		}
	}
</style>