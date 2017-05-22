<template>
	<div class="user-card" v-bind:style="styleObject">
		<div class="section1">
			<div class="icon-zone">
				<span class="header-icon-crown"></span>
			</div>

			<ul class="user-info">
				<li class="id-zone">
					ID {{loginUserInfo.Id}}
				</li>

				<li>
					<span class="title">安全评分</span>
					<span class="value">{{safeScores}}分</span>
					<span class="strengthen"><span>提升</span></span>
				</li>

				<li>
					<span class="title">玩家等级</span>
					<span class="value">{{loginUserInfo.UserLevelName}}</span>
					<span class="strengthen"><span>提升</span></span>
				</li>
			</ul>

			<div class="logout" v-on:click="logout">退出</div>
		</div>

		<div class="section2">
			<ul>
				<li>
					<div class="header-icon-zjgl"></div>	
					<div class="title">资金管理</div>
				</li>

				<li>
					<div class="header-icon-tzjl"></div>
					<div class="title">投注记录</div>	
				</li>

				<li>
					<div class="header-icon-czjl"></div>
					<div class="title">充值记录</div>
				</li>

				<li>
					<div class="header-icon-xgmm"></div>
					<div class="title">修改密码</div>		
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';

	export default {
		name: 'user-card',
		
		props: [
			'styleObject'
		],

		data: function () {
			return {
				safeScores: '20'
			}
		},

		methods: {
			logout: function () {
				var opt;
				var callback;
				var that = this;

		    	opt   =  {
					url: Config.urls.signOut,
					data: {}
				};

				callback = function (json) {
		            if(json === true) {
		            	that.$store.dispatch('setLoginStatus', {status: false});
		            }
				};

				Service.get(opt, callback);
			}
		},

	  	computed: mapState({
	  		loginUserInfo: function (state) {
	  			return state.loginUserInfo;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.user-card {
		background-color: #252558;
		border: 1px solid #313169;
		border-top: 0;
		position: absolute;
		width: 338px;
		height: 204px;
		z-index: 6;

		.header-icon-crown {
			background-image: url(../../assets/common.png);
			background-position: -5px -308px;
			display: inline-block;
			width: 125px;
			height: 94px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-zjgl {
			background-image: url(../../assets/common.png);
			background-position: -141px -108px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-tzjl {
			background-image: url(../../assets/common.png);
			background-position: -141px -154px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-czjl {
			background-image: url(../../assets/common.png);
			background-position: -141px -201px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-xgmm {
			background-image: url(../../assets/common.png);
			background-position: -141px -246px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.section1 {
			height: 122px;
			width: 100%;
			text-align: left;
			position: relative;

			.icon-zone {
				display: inline-block;
				width: 150px;
				height: 122px;
				line-height: 122px;
				vertical-align: top;
				text-align: center;
			}

			.user-info {
				display: inline-block;
				width: 180px;
				height: 100%;
				list-style:none;
				vertical-align: top;
				padding-top: 26px;

				li {
					font-size: 12px;
					height: 29px;
					line-height: 29px;
					text-align: left;
					display: flex;

					.title {
						flex: 1;
					}

					.value {
						color: #ffba13;
						display: inline-block;
						flex: 1;
					}

					.strengthen {
						flex: 1;
						text-align: left;

						span {
							cursor: pointer;
							display: inline-block;
							width: 50px;
							height: 20px;
							line-height: 20px;
							border: 1px solid #313169;
							text-align: center;
						}

						&:hover {
							span {
								color: #f5bc44;
							}
						}
					}
				}

				.id-zone {
					font-size: 20px;
				}
			}

			.logout {
				position: absolute;
				height: 20px;
				width: 40px;
				right: 0px;
				top: -10px;
				cursor: pointer;

				&:hover {
					color: #f5bc44;
				}
			}
		}

		.section2 {
			display: inline-block;
			height: 82px;
			width: 100%;

			ul {
				height: 82px;
				width: 100%;
				text-align: center;

				li {
					line-height: 30px;
					height: 82px;
					display: inline-block;
					width: 24%;

					.title {
						height: 35px;
						line-height: 35px;
					}

					&:hover {
						.title {
							color: #ffba13;
						}

						.header-icon-zjgl {
							background-position: -187px -108px;
						}

						.header-icon-tzjl {
							background-position: -187px -154px;
						}

						.header-icon-czjl {
							background-position: -187px -201px;
						}

						.header-icon-xgmm {
							background-position: -187px -246px;
						}
					}
				}
			}
		}
	}
</style>