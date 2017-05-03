<template>
	<div class="page slot-page">
		<div class="page-wrapper home-page-wrapper">
			<div class="swiper-zone">
				<span class="left-arrow"></span>

			    <swiper :options="swiperOption">
			        <swiper-slide v-for="banner in banners">
			        	<img :src="banner">
			        </swiper-slide>
			    </swiper>

				<span class="right-arrow"></span>
			</div>

			<div class="platform-zone">
				<div class="platform-zone-wrapper">
					<ul>
						<li v-for="platform in platformList" 
							v-bind:class="[platform.className]" 
							v-bind:data-platform="platform.value">

							<span></span>
						</li>
					</ul>
				</div>
			</div>

			<div class="category-zone">
				<div class="category-zone-wrapper">
					<ul>
						<li v-for             =  "cateItem in categoryList" 
							v-bind:class      =  "[cateItem.Id == categoryId?'selected': '']" 
							v-bind:data-id    =  "cateItem.Id" 
							v-bind:data-code  =  "cateItem.Code"
							v-on:click        =  "categoryItemClicked($event)">

							<span>{{cateItem.Name}}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="game-zone">
				<div class="game-zone-wrapper">
					<div class="game-zone-left">
						<slot-game-item v-for         =  "item in gameList"
										:gameId       =  "item.Id"
										:identify      =  "item.GameIdentify"
										:isTry         =  "item.IsTry"
										:gameType      =  "item.GameTypeText_EN"
										:platform      =  "item.Api.GamePlatform"
										:cnname        =  "item.Title"
										:showJackpots  =  "item.ShowJackpots"
										:imageUrl      =  "item.ImageUrl">
						</slot-game-item>
					</div>

					<div class="game-zone-right">
						<search-input placeholder="快速查找游戏"></search-input>
						<slot-title title="累积奖池"></slot-title>
						<div class="pt-jackpot-value">421,131,125.23</div>
						<slot-title title="超级彩金"></slot-title>
						<marquee :list="jackpotGameList"></marquee>
						<img class="slot-small-ad" :src="slotSmallAd">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import slotGameItem from './slotGameItem';
	import searchInput from './searchInput';
	import slotTitle from './slotTitle';
	import marquee from './marquee';
	import slotBanner from '../../assets/slot-banner.png';
	import slotSmallAd from '../../assets/slot-small-ad.png';
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';

	export default {
		name: 'slot-page',
		
		data: function () {
			return {
		        swiperOption: {
		          	pagination: '.swiper-pagination',
		          	paginationClickable: true,
			        prevButton:'.left-arrow',
			        nextButton:'.right-arrow',
			        spaceBetween: 100
		        },

		        banners: [
		        	slotBanner,
		        	slotBanner,
		        	slotBanner,
		        	slotBanner
		        ],

		        platformList :  [
		        	{
		        		className: 'platform-pp',
		        		text: 'PP电子',
		        		value: 'PP'
		        	},
		        	{
		        		className: 'platform-pt',
		        		text: 'PT电子',
		        		value: 'PT'
		        	},
		        	{
		        		className: 'platform-bbin',
		        		text: 'BBIN电子',
		        		value: 'BBIN'
		        	},
		        	{
		        		className: 'platform-mg',
		        		text: 'MG电子',
		        		value: 'MG'
		        	},
		        	{
		        		className: 'platform-ag',
		        		text: 'AG电子',
		        		value: 'AG'
		        	},
		        	{
		        		className: 'platform-ttg',
		        		text: 'TTG电子',
		        		value: 'TTG'
		        	},
		        	{
		        		className: 'platform-mt',
		        		text: 'MT电子',
		        		value: 'MT'
		        	}            //平台列表
		        ],

		        slotSmallAd,

		        categoryList      :  [],       //category列表
		        gameList          :  [],       //当前游戏列表
		        jackpotGameList   :  [],       //奖金池游戏列表
		        collectionList    :  [],       //收藏列表
		        platform          :  'pp',     //当前platform
		        categoryId        :  '',       //当前category Id
		        categoryCode      :  '',       //当前category code
				pageIndex         :  0,        //当前页
				pageSize          :  30        //每页游戏数量
			}
		},

		components: {
			'swiper'         : swiper,
			'swiper-slide'   : swiperSlide,
			'slot-game-item' : slotGameItem,
			'search-input'   : searchInput,
			'slot-title'     : slotTitle,
			'marquee'        : marquee,
		},

		methods: {
			getBanners: function () {
				var callback;
				var that    =  this;
				var opt     =  {
					url: Config.urls.getAds,
					data: {
						type: 'pd_wyb_slot_ads',
						pageIndex: 0,
						pageSize: 10
					}
				};

				callback = function (data) {
					that.loader4.stop();
					
					if (!data) {
						return;
					}
					
					that.addSliders(data);
				};

				Service.get(opt, callback);
			},

			getJackpotsGames: function (platform) {
				var i;
				var temp;
				var callback;
				var eJackpotsGames;
				var arr  = [];
				var that =  this;
				var opt  =  {
					url: Config.urls.getJackpotsGames,
			        data: {
			        	platform: platform,
			        	pageIndex: 0,
			        	pageSize: 25
			        }
				};

				if (platform !== 'PT' && platform !== 'MG') {
					return;
				}

				eJackpotsGames = localStorage.getItem('e-jackpots-games');

				if (eJackpotsGames) {
		        	this.jackpotGameList = JSON.parse(eJackpotsGames);
		        	return;
				}

				callback = function (json) {
					for (i = 0; i < json.length; i++) {
						temp = {
							name        : json[i].Title,
							platform    : json[i].Api.GamePlatform,         //取MG基础值的时候用
							id          : json[i].Id,                       //取MG基础值的时候用
							jackpotsUrl : that.formatJackpotsUrl(json[i])   //取PT基础值的时候用
 						};

 						arr.push(temp);
					}

		        	that.jackpotGameList = arr;
		        	localStorage.setItem('e-jackpots-games', JSON.stringify(arr));
				};

				Service.get(opt, callback);
			},

			getCategoryList: function () {
				var i;
				var opt;
				var callback;
				var that = this;
				var eGameCategoryData = localStorage.getItem('e-game-category');

				if (eGameCategoryData) {
		        	this.categoryList = JSON.parse(eGameCategoryData);
		        	this.category     = this.categoryList[0].Id;
		        	this.getFavoriteGameIds();
		        	return;
				}

				opt = {
					url: Config.urls.getGameCategories,
					data: {
						code: 'electron'
					}
				};

				callback = function (json) {
					if (json.StatusCode && json.StatusCode != 0) {
						alert(json.Message);
						return;
					}

					for (i = 0; i < json.length; i++) {
						if (json[i].Code == 'slot999') {
							json[i].Id = '';
						}
					}

					that.categoryList = json;              //设置categoryList
					that.category     = json[0].Id;        //设置第一个category为当前category
					localStorage.setItem('e-game-category', JSON.stringify(json));
					that.getFavoriteGameIds();
				};

				Service.get(opt, callback);
			},

			getFavoriteGameIds: function () {
				var opt;
				var callback;
				var that = this;

				if (!this.loginStatus) {                     //如果是未登录状态，就没有favoriteGameIds
					this.collectionList[this.platform] = [];
					this.getGameList();
					return;
				}

				if (this.collectionList[this.platform]) {
					this.getGameList();
					return;
				}

				opt = {
					url: Config.urls.getFavoriteGameIds,
					data: {
						platform: this.platform
					}
				};

				callback = function (data) {
					if (data.StatusCode && data.StatusCode != 0) {
						if (data.Message == '未登录') {
							that.collectionList[platform] = [];
						} else {
							app.alert(data.Message);
							return;
						}
					}

					if (data.Data) {
						that.collectionList[that.platform] = data.Data.split(',');
					} else {
						that.collectionList[that.platform] = [];
					}
					
					that.getGameList();
				};

				Service.get(opt, callback);
			},

			getGameList: function () {
				var callback;
				var that       =  this;
				var opt        =  {
					url: Config.urls.getGameList,
					data: {
						platform   : this.platform,
						categoryId : this.category,
						pageIndex  : this.pageIndex,
						pageSize   : this.pageSize
					}
				};

				callback = function (data) {
					if (data.StatusCode && data.StatusCode != 0) {
						alert(data.Message);
						return;
					}
					
		        	//console.log(JSON.stringify(data));
		        	that.gameList = data.list;
				};

				Service.get(opt, callback);
			},

			categoryItemClicked: function (event) {
				this.categoryId = event.currentTarget.dataset.id;
			},

			formatJackpotsUrl: function (data) {
		        var jackpotsUrl;
		        var jackpotCode;
				var _jackpotInfoType = {
		            CASINOBASED    : '2',
		            CASINOSTOTAL   : '4',
		            GAMEBASED      : '1',
		            GAMEGROUPTOTAL : '5',
		            GAMETOTAL      : '3'
		        };

			    if (data.ShowJackpots) {
			        jackpotsUrl = data.Api.LoginUrl2 + "?info=" + data.JackpotsInfo + "&currency=cny";

			        if (data.JackpotsInfo == _jackpotInfoType.GAMEBASED) {
			            jackpotCode = data.GameIdentify;

			            if (data.JackpotsParams.length > 0) {
			                jackpotCode = data.JackpotsParams;
			            }

			            jackpotsUrl += "&casino=playtech&game=" + jackpotCode;
			        } else if ( data.JackpotsInfo == _jackpotInfoType.CASINOBASED || 
			        			data.JackpotsInfo == _jackpotInfoType.CASINOSTOTAL) {
			            jackpotsUrl += "&casino=playtech";
			        } else if (data.JackpotsInfo == _jackpotInfoType.GAMEGROUPTOTAL) {
			            jackpotCode = data.GameIdentify;

			            if (data.JackpotsParams.length > 0) {
			                jackpotCode = data.JackpotsParams;
			            }

			            jackpotsUrl += "&casino=playtech&group=" + jackpotCode;
			        }
			    }

			    return jackpotsUrl;
			}
		},

		mounted: function () {
			//this.getBanners();
			this.getJackpotsGames('PT');
			this.getCategoryList();
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	$slotWrapperL            :    1140;
	$slotWrapperWidth        :    1140px;
	$gameLeftWidth           :    $slotWrapperWidth * 900 / $slotWrapperL;
	$gameRightWidth          :    $slotWrapperWidth * 235 / $slotWrapperL;
	$platformZoneHeight      :    $slotWrapperWidth * 66 / $slotWrapperL;
	$categoryZoneHeight      :    $slotWrapperWidth * 66 / $slotWrapperL;
	$platformItemWidth       :    $slotWrapperWidth * 140 / $slotWrapperL;
	$ptJackpotWidth          :    $slotWrapperWidth * 230 / $slotWrapperL;
	$ptJackpotHeight         :    $slotWrapperWidth * 80 / $slotWrapperL;

	.slot-page {
		.swiper-zone {
		    -webkit-user-select: none;
		    user-select: none;
			position: relative;
			width: 100%;

			.left-arrow {
				background-image: url(../../assets/page-left-arrow.png);
				cursor: pointer;
				height: 60px;
				width: 60px;
			    position: absolute;
			    top: 50%;
			    margin-top: -30px;
			    left: 0;
			    z-index: 2;

				&:hover {
					background-image: url(../../assets/page-left-arrow-active.png);
				}
			}

			.middle-zone {
				height: auto;

				.swiper-slide {
					img {
						width: 100%;
					}
				}
			}

			.right-arrow {
				background-image: url(../../assets/page-right-arrow.png);
				cursor: pointer;
				height: 60px;
				width: 60px;
   				position: absolute;
			    top: 50%;
			    margin-top: -30px;
			    right: 0;
			    z-index: 2;

				&:hover {
					background-image: url(../../assets/page-right-arrow-active.png);
				}
			}
		}

		.platform-zone {
			background-color: rgba(0, 0, 0, .7);
			height: $platformZoneHeight;
			margin-top: 0 - $platformZoneHeight;
			position: relative;
			z-index: 2;
			width: 100%;

			.platform-zone-wrapper {
				width: $slotWrapperWidth;
				margin: 0 auto;

				ul {
					list-style: none;
					display: flex;

					li {
						flex: 1;
						cursor: pointer;
						display: inline-block;
						height: $platformZoneHeight;
						line-height: $platformZoneHeight;
						text-align: center;
						padding: 1px;

						span {
							background-image: url(../../assets/platforms.png);
							height: $platformZoneHeight - 8px;
							display: inline-block;
							width: $platformItemWidth;
						}

						&:hover {
							background-image: url(../../assets/aiming.png);
							background-size: $platformItemWidth $platformZoneHeight;
							background-repeat: no-repeat;
						}
					}

					.active {
						background-image: url(../../assets/aiming.png);
						background-size: $platformItemWidth $platformZoneHeight;
						background-repeat: no-repeat;
					}

					.selected {
						background-image: url(../../assets/aiming.png);
						background-size: $platformItemWidth $platformZoneHeight;
						background-repeat: no-repeat;
					}

					.platform-pp {
						span {
							background-position: -420px -1px;

							&:hover {
								background-position: -420px -67px;
							}
						}
					}

					.platform-pt {
						span {
							background-position: -280px -1px;

							&:hover {
								background-position: -280px -67px;
							}
						}
					}

					.platform-bbin {
						span {
							background-position: -140px -1px;

							&:hover {
								background-position: -140px -67px;
							}
						}
					}

					.platform-mg {
						span {
							background-position: -560px -1px;

							&:hover {
								background-position: -560px -67px;
							}
						}
					}

					.platform-ag {
						span {
							background-position: 0 -1px;

							&:hover {
								background-position: 0 -67px;
							}
						}
					}

					.platform-ttg {
						span {
							background-position: -700px -1px;

							&:hover {
								background-position: -700px -67px;
							}
						}
					}

					.platform-mt {
						span {
							background-position: -700px -1px;

							&:hover {
								background-position: -700px -67px;
							}
						}
					}
				}
			}
		}

		.category-zone {
			background-color: rgba(0, 0, 0, .1);
			height: $categoryZoneHeight;
			width: 100%;

			.category-zone-wrapper {
				margin: 0 auto;
				width: $slotWrapperWidth;

				ul {
					list-style: none;

					li {
						cursor: pointer;
						display: inline-block;
						font-size: 14px;
						height: $platformZoneHeight;
						line-height: $platformZoneHeight;
						width: auto;
						margin-right: 60px;
						text-align: left;
						transition: all .3s;
					}

					.selected {
						span {
							background-color: #322b4d;
							border-radius: 30px;
							color: #b062d2;
							padding: 10px 25px;
						}
					}
				}
			}
		}

		.game-zone {
			height: auto;
			width: 100%;
			margin-bottom: 30px;

			.game-zone-wrapper {
				margin: 0 auto;
				width: $slotWrapperWidth;

				.game-zone-left {
					width: $gameLeftWidth;
					display: inline-flex;
					flex-direction: row;
					flex-wrap: wrap;
				}

				.game-zone-right {
					width: $gameRightWidth;
					display: inline-block;
					vertical-align: top;
					margin-top: 10px;

					.pt-jackpot-value {
						background-image: url(../../assets/common.png);
						color: #FFF;
						font-size: 24px;
						font-weight: bold;
						width: $ptJackpotWidth;
						height: $ptJackpotHeight;
						line-height: $ptJackpotHeight;
						text-align: center;
					}

					.slot-small-ad {
						margin-top: 14px;
					}
				}
			}
		}
	}
</style>