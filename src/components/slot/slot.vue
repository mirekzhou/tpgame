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
						<li v-for="platform in platformList" v-bind:class="[platform.className]" data-platform="platform.value">
							<span></span>
						</li>
					</ul>
				</div>
			</div>

			<div class="category-zone">
				<div class="category-zone-wrapper">
					<ul>
						<li v-for="category in categoryList" 
							v-bind:class="[category.active? 'active': '']" 
							data-id="category.Id" 
							data-code="category.Code">

							<span>{{category.Name}}</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="game-zone">
				<div class="game-zone-left">
				</div>

				<div class="game-oper-right">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import slotBanner from '../../assets/slot-banner.png';
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
		        		className: 'platform-PP',
		        		text: 'PP电子',
		        		value: 'PP'
		        	},
		        	{
		        		className: 'platform-PT',
		        		text: 'PT电子',
		        		value: 'PT'
		        	},
		        	{
		        		className: 'platform-BBIN',
		        		text: 'BBIN电子',
		        		value: 'BBIN'
		        	},
		        	{
		        		className: 'platform-MG',
		        		text: 'MG电子',
		        		value: 'MG'
		        	},
		        	{
		        		className: 'platform-AG',
		        		text: 'AG电子',
		        		value: 'AG'
		        	},
		        	{
		        		className: 'platform-TTG',
		        		text: 'TTG电子',
		        		value: 'TTG'
		        	},
		        	{
		        		className: 'platform-MT',
		        		text: 'MT电子',
		        		value: 'MT'
		        	}
		        ],

		        categoryList      :  [],
		        gameList          :  [],
		        favoriteGameList  :  []
			}
		},

		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide
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
				var callback;
				var eJackpotsGames;
				var that =  this;
				var opt  =  {
					url: app.urls.getJackpotsGames,
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
		        	this.loader1.stop();
		        	this.bonusPoolData = JSON.parse(eJackpotsGames);
		        	this.setMarqueenItems(true);
		        	return;
				}

				callback = function (json) {
		        	that.bonusPoolData = json;
		        	localStorage.setItem('e-jackpots-games', JSON.stringify(json));
		        	that.loader1.stop();
		        	that.setMarqueenItems(true);
				};

				this.loader1.play();
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
						if (i == 0) {
							json[i].active = true;
						} else {
							json[i].active = false;
						}
					}

					console.log(JSON.stringify(json));

					localStorage.setItem('e-game-category', JSON.stringify(json));
		        	that.categoryList = json;
		        	console.log('categoryList = ' + JSON.parse(that.categoryList));
					that.getFavoriteGameIds();
				};

				Service.get(opt, callback);
			},

			getFavoriteGameIds: function () {
				if (this.loginStatus) {

				} else {

				}
			}
		},

		mounted: function () {
			//this.getBanners();
			//this.getJackpotsGames('PT');
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
	$gameLeftWidth           :    $slotWrapperWidth * 895 / $slotWrapperL;
	$gameRightWidth          :    $slotWrapperWidth * 230 / $slotWrapperL;
	$platformZoneHeight      :    $slotWrapperWidth * 66 / $slotWrapperL;
	$categoryZoneHeight      :    $slotWrapperWidth * 66 / $slotWrapperL;
	$platformItemWidth       :    $slotWrapperWidth * 140 / $slotWrapperL;

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
						text-align: left;

						span {
							background-image: url(../../assets/platforms.png);
							height: $platformZoneHeight;
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

					.platform-PP {
						span {
							background-position: -420px -1px;

							&:hover {
								background-position: -420px -67px;
							}
						}
					}

					.platform-PT {
						span {
							background-position: -280px -1px;

							&:hover {
								background-position: -280px -67px;
							}
						}
					}

					.platform-BBIN {
						span {
							background-position: -140px -1px;

							&:hover {
								background-position: -140px -67px;
							}
						}
					}

					.platform-MG {
						span {
							background-position: -560px -1px;

							&:hover {
								background-position: -560px -67px;
							}
						}
					}

					.platform-AG {
						span {
							background-position: 0 -1px;

							&:hover {
								background-position: 0 -67px;
							}
						}
					}

					.platform-TTG {
						span {
							background-position: -700px -1px;

							&:hover {
								background-position: -700px -67px;
							}
						}
					}

					.platform-MT {
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
					}

					.active {
						span {
							background-color: #322b4d;
							border-radius: 30px;
							padding: 10px 25px;
						}
					}
				}
			}
		}

		.game-zone {
			width: $slotWrapperWidth;

			.game-zone-left {
				width: $gameLeftWidth;
			}

			.game-zone-right {
				width: $gameRightWidth;
			}
		}
	}
</style>