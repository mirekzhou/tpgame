<template>
	<div class="header">
		<div class="top-section">
			<div class="p-wrapper top-section-wrapper">
				<ul v-show="!loginStatus">
					<li>
						<button class="go-login" v-on:click="goLogin">登录</button>
						<button class="go-register" v-on:click="goRegister">注册</button>
					</li>

					<li>
						<span class="cursor">语言选择：{{language}}</span>
						<span class="header-icon-down"></span>
					</li>
				</ul>

				<ul v-show="loginStatus">
					<li class="li-user-center"
						v-on:mouseover="usernameMouseOver" 
						v-on:mouseout="usernameMouseOut" 
						v-bind:class="{active: showUserCard}">

						<span class="cursor">Hi, {{username}}</span>
						<span class="header-icon-down"></span>
						<user-card :styleObject="userCardStyle" v-show="showUserCard"></user-card>
					</li>
					<li class="li-task-center">
						<span class="header-icon-cup"></span>
						<span class="cursor">活动中心</span>
						<span class="dot"></span>
					</li>
					<li>
						<span class="header-icon-pig"></span>
						<span class="balance cursor">{{balance}}</span>
						<span class="header-icon-down"></span>
						<span class="header-icon-money-refresh" v-on:click="refreshBalance" v-bind:class="{'rotate': rotateBalance}"></span>
						<span class="separator"></span>
					</li>
					<li>
						<span class="header-icon-star"></span>
						<span class="cursor">收藏夹</span>
						<span class="header-icon-down"></span>
						<span class="separator"></span>
					</li>
					<li>
						<span class="header-icon-folder"></span>
						<span class="cursor">资金管理</span>
						<span class="header-icon-down"></span>
						<span class="separator"></span>
					</li>
					<li>
						<span class="cursor">帮助中心</span>
					</li>
					<li>
						<button class="contact-cs cursor" v-on:click="goLogin">在线客服</button>
					</li>
					<li>
						<span class="cursor">语言选择：{{language}}</span>
						<span class="header-icon-down"></span>
					</li>
				</ul>
			</div>
		</div>

		<div class="nav-section">
			<div class="p-wrapper nav-section-wrapper">
				<span class="header-logo"></span>
				<ul class="pages-section">
					<li><router-link to="/home"><span>首页</span></router-link></li>
					<li><router-link to="/sport"><span>体育竞技</span></router-link></li>
					<li><router-link to="/live"><span>真人视讯</span></router-link></li>
					<li><router-link to="/slot"><span>电子游艺</span></router-link></li>
					<!-- <li><router-link to="/egaming">电子竞技</router-link></li> -->
					<li><router-link to="/lottery"><span>彩票游戏</span></router-link></li>
<!-- 					<li><router-link to="/phonebetting">电话投注</router-link></li>
					<li><router-link to="/download">下载中心</router-link></li> -->
				</ul>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import userCard from './userCard';
	import collectionCard from './collectionCard';
	import { mapState } from 'vuex';

	export default {
		name: 'header',
		
		data: function () {
			return {
				username: 'Imayday123',
				balance: '1,000,000,000.00',
				language: '中文',
				showUserCard: false,
				userCardStyle: {
					'left': '0',
					'top': '60px'
				},
				rotateBalance: false
			}
		},

		methods: {
			goLogin: function () {
				this.$store.dispatch('switchLoginDialog', {status: true});
			},

			goRegister: function () {
				this.$store.dispatch('switchRegisterDialog', {status: true});
			},

			usernameMouseOver: function () {
				this.showUserCard = true;
			},

			usernameMouseOut: function () {
				this.showUserCard = false;
			},

			refreshBalance: function () {
				var that = this;

				this.rotateBalance = true;

				var st = setTimeout(function () {
					that.rotateBalance = false;
					clearTimeout(st);
				}, 2000);
			}
		},

		components: {
			'user-card' :userCard,
			'collection-card': collectionCard
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	$headerTopSectionHeight   :   60px;
	$headerNavSectionHeight   :   60px;

	.router-link-active{
        span {
        	border-bottom: 2px solid #d263ee;
        	color: #d263ee ;
        	display: inline-block;
        	height: 36px;
        	line-height: 36px;
        	vertical-align: middle;
        }
    }

	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;

		.top-section {
			background-color: #0c1135;
			font-size: 14px;
			height: $headerTopSectionHeight;
			line-height: $headerTopSectionHeight;

			.top-section-wrapper {
				text-align: center;
				position: relative;
			    width: 1140px;
			    margin: 0 auto;

				ul {
					width: 100%;
					text-align: right;

					li {
						display: inline-block;
						height: $headerTopSectionHeight;
						line-height: $headerTopSectionHeight;
						position: relative;

						.separator {
							display: inline-block;
							border-right: 1px solid #FFF;
							height: 15px;
							line-height: 15px;
							width: 10px;
							vertical-align: text-bottom;
							margin-right: 10px;
						}

						.contact-cs {
							background-color: #06a11b;
							border: 0;
							border-radius: 5px;
							cursor: pointer;
							color: #FFF;
							height: 30px;
							width: 100px;
							text-align: center;
							margin: 0 10px;
							outline: 0;
						}

						.dot {
							width: 4px;
							height: 4px;
							border: 0;
							border-radius: 50%;
							background-color: #F00;
							position: absolute;
							right: 6px;
							top: 19px;
						}

						.cursor {
							cursor: pointer;
						}

						.go-login {
							background-color: #06a11b;
							border: 0;
							border-radius: 5px;
							cursor: pointer;
							color: #FFF;
							width: 82px;
							height: 32px;
							margin-right: 28px;
							outline: 0;
						}

						.go-register {
							background-color: #06a11b;
							border: 0;
							border-radius: 5px;
							cursor: pointer;
							color: #FFF;
							width: 82px;
							height: 32px;
							margin-right: 28px;
							outline: 0;
						}

						.rotate {
							transition: transform 2s;
							transform: rotateZ(720deg);
						}
					}

					.li-task-center {
						padding-right: 10px;
					}

					.li-user-center {
						padding: 0 10px;
					}

					.active {
						background-color: #252558;
					}
				}
			}
		}

		.nav-section {
			background-color: #252558;
			height: $headerNavSectionHeight;
			line-height: $headerNavSectionHeight;

			.nav-section-wrapper {
				text-align: center;

				.pages-section {
					list-style-type: none;
					height: $headerNavSectionHeight;
					line-height: $headerNavSectionHeight;
					padding: 0;

					li {
						cursor: pointer;
						display: inline-block;

						&:last-child {
							margin-right: 0px;							
						}

						a {
							color: #FFF;
							font: normal normal normal 14px/1.4em georgia,palatino,'book antiqua','palatino linotype',serif;
							text-decoration: none;
							padding: 10px 30px;
						}
					}

					.active {
						a {
							color: #d5d5d5;
						}
					}
				}
			}
		}

		.header-logo {

		}

		.header-icon-down {
			background-image: url(../../assets/common.png);
			background-position: -171px -92px;
			display: inline-block;
			width: 10px;
			height: 8px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-cup {
			background-image: url(../../assets/common.png);
			background-position: -69px -84px;
			display: inline-block;
			width: 20px;
			height: 20px;
			vertical-align: text-bottom;
		}

		.header-icon-pig {
			background-image: url(../../assets/common.png);
			background-position: -95px -84px;
			display: inline-block;
			width: 21px;
			height: 20px;
			vertical-align: text-bottom;
		}

		.header-icon-folder {
			background-image: url(../../assets/common.png);
			background-position: -121px -87px;
			display: inline-block;
			width: 16px;
			height: 16px;
			vertical-align: text-bottom;
		}

		.header-icon-money-refresh {
			background-image: url(../../assets/common.png);
			background-position: -144px -86px;
			display: inline-block;
			width: 17px;
			height: 17px;
			vertical-align: text-bottom;
			cursor: pointer;
		}

		.header-icon-star {
			background-image: url(../../assets/common.png);
			background-position: -47px -84px;
			display: inline-block;
			width: 17px;
			height: 17px;
			vertical-align: text-bottom;
		}
	}
</style>