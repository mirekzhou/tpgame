<template>
	<div class="header">
		<div class="top-section">
			<div class="p-wrapper top-section-wrapper">
				<ul>
					<li v-on:mouseover="usernameMouseOver" 
						v-on:mouseout="usernameMouseOut" 
						v-bind:class="{active: showUserCard}"
						v-show="loginStatus">

						<span class="cursor">Hi, {{loginUserInfo.UserName}}</span>
						<span class="header-icon-down"></span>
						<user-card :styleObject="userCardStyle" v-show="showUserCard"></user-card>
					</li>

					<li class="li-task-center" v-show="loginStatus">
						<span class="header-icon-cup"></span>
						<span class="cursor">活动中心</span>
						<span class="dot"></span>
					</li>

					<li v-show="loginStatus">
						<span class="header-icon-pig"></span>
						<span class="balance cursor">{{loginUserInfo.Cash}}</span>
						<span class="header-icon-down"></span>
						<span class="header-icon-money-refresh" v-on:click="refreshBalance" v-bind:class="{'rotate': rotateBalance}"></span>
					</li>

					<li class="separator" v-show="loginStatus">
						<span></span>
					</li>

					<li class="li-collection"
						v-show="loginStatus"
						v-on:mouseover="collectionMouseOver" 
						v-on:mouseout="collectionMouseOut">

						<span class="header-icon-star"></span>
						<span class="cursor">收藏夹</span>
						<span class="header-icon-down"></span>
						<collection-card :styleObject="collectionCardStyle" 
										 :showCollectionCard="showCollectionCard">
						</collection-card>
					</li>

					<li class="separator" v-show="loginStatus">
						<span></span>
					</li>

					<li v-show="loginStatus"
						v-on:mouseover="moneyManageMouseOver" 
						v-on:mouseout="moneyManageMouseOut"
						v-bind:class="{active: showMoneyManageCard}">

						<span class="header-icon-folder"></span>
						<span class="cursor">资金管理</span>
						<span class="header-icon-down"></span>
						<drop-card  :styleObject="moneyManageCardStyle" 
									:showDropCard="showMoneyManageCard"
									:items="moneyManageList"
									v-on:itemClicked="moneyManageItemClicked">
						</drop-card>
					</li>

					<li class="separator" v-show="loginStatus">
						<span></span>
					</li>

					<li v-show="!loginStatus">
						<button class="go-login" v-on:click="goLogin">登录</button>
						<button class="go-register" v-on:click="goRegister">注册</button>
					</li>

					<li v-show="loginStatus">
						<span class="cursor">帮助中心</span>
					</li>

					<li v-show="loginStatus">
						<button class="contact-cs cursor" v-on:click="goLogin">在线客服</button>
					</li>

					<li v-on:mouseover="languageMouseOver" 
						v-on:mouseout="languageMouseOut"
						v-bind:class="{active: showLanguageCard}">

						<span class="cursor">语言选择：{{language}}</span>
						<span class="header-icon-down"></span>
						<drop-card  :styleObject="languageCardStyle" 
									:showDropCard="showLanguageCard"
									:items="languageList"
									v-on:itemClicked="languageItemClicked">
						</drop-card>
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
	import dropCard from './dropCard';
	import collectionCard from './collectionCard';
	import { mapState } from 'vuex';

	export default {
		name: 'header',
		
		data: function () {
			return {
				language: '中文',
				rotateBalance: false,

				showUserCard: false,
				showLanguageCard: false,
				showMoneyManageCard:false,
				showCollectionCard: false,

				userCardStyle: {
					'left': '0',
					'top': '60px'
				},

				languageCardStyle: {
					'right': '0',
					'top': '60px',
					'width': '122px'
				},

				moneyManageCardStyle: {
					'right': '0',
					'top': '60px',
					'width': '100px'
				},

				collectionCardStyle: {
					'top': '60px'
				},

				languageList: [
					{
						text:'中文',
						value: 'zh'
					}, {
						text: 'English',
						value: 'en'
					} , {
						text: '繁体中文',
						value: 'tw'
					}
				],
				
				moneyManageList: [
					{
						text:'充值',
						value: '0'
					}, {
						text: '转账',
						value: '1'
					} , {
						text: '提现',
						value: '2'
					}
				]
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

			moneyManageMouseOver: function () {
				this.showMoneyManageCard = true;
			},

			moneyManageMouseOut: function () {
				this.showMoneyManageCard = false;
			},

			moneyManageItemClicked: function (data) {
				alert(data.text);
			},

			languageMouseOver: function () {
				this.showLanguageCard = true;
			},

			languageMouseOut: function () {
				this.showLanguageCard = false;
			},

			languageItemClicked: function (data) {
				this.language = data.text;
				this.showLanguageCard = false;
			},

			collectionMouseOver: function () {
				this.showCollectionCard = true;
			},

			collectionMouseOut: function () {
				this.showCollectionCard = false;
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
			'collection-card': collectionCard,
			'drop-card': dropCard
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		},

	  		loginUserInfo: function (state) {
	  			return state.loginUserInfo;
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
						padding: 0 5px;

						.contact-cs {
							background-color: #06a11b;
							border: 0;
							border-radius: 5px;
							cursor: pointer;
							color: #FFF;
							height: 30px;
							width: 100px;
							text-align: center;
							margin: 0 5px;
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
							margin-right: 18px;
							outline: 0;
						}

						.rotate {
							transition: transform 2s;
							transform: rotateZ(720deg);
						}
					}

					.separator {
						padding: 0;

						span {
							display: inline-block;
							border-right: 1px solid #FFF;
							height: 15px;
							line-height: 15px;
							width: 5px;
							margin-right: 5px;
							vertical-align: text-bottom;
						}
					}

					.li-collection {
						position: initial;
					}

					.active {
						background-color: #252558;
						border-left: 1px solid #333465;
						border-right: 1px solid #333465;
						padding: 0 4px;
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
							font-size: 14px;
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