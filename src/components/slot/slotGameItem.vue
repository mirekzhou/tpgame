<template>
	<div class="slot-game-item">
		<div class="top-zone">
			<div class="image" v-bind:style="{backgroundImage: imgUrl}"></div>
			<div class="jackpot-value" v-show="showJackpots">111.23</div>
		</div>

		<div class="bottom-zone">
			<span class="name">{{cnname}}</span>
			<span class="star" v-on:click="starClicked">
				<div class="star-icon" v-bind:class="collectFlag?'collected': ''"></div>
			</span>
		</div>
	</div>
</template>

<script>
	import Config from '../../config/config.js';

	export default {
		name: 'slot-game-item',
		
		props: [
			'gameId',        //游戏Id
			'identify',      //游戏Identity
			'isTry',         //是否可以试玩
			'gameType',      //游戏类型
			'platform',      //游戏平台
			'collectid',     //收藏Id
			'collected',     //是否已经被收藏
			'cnname',        //游戏中文名称
			'showJackpots',  //是否显示奖金池
			'jackpotUrl',    //jackpot奖金池url
			'imageUrl'       //游戏图片url
		],

		data: function () {
			return {
				imgUrl:  'url(' + Config.imageServer + this.imageUrl + ')',
				collectFlag: this.collected
			}
		},

		components: {
		},

		methods: {
			starClicked: function () {
				this.collectFlag = !this.collectFlag;
			}
		},

		filters: {
			formatImageUrl: function (value) {
				return 'url("' +  + value + '")';
			}
		}
	}
</script>

<style lang="scss" scoped>
	$gameL                   :    1140;
	$gameWidth               :    1140px;
	$gameItemWidth           :    $gameWidth * 170 / $gameL;
	$gameItemHeight          :    $gameWidth * 146 / $gameL;
	$topZoneHeight           :    $gameWidth * 120 / $gameL;
	$middleZoneHeight        :    $gameWidth * 1 / $gameL;
	$bottomZoneHeight        :    $gameWidth * 24 / $gameL;
	$themeBkColor1           :    #222355;
	
	.slot-game-item {
		border: 1px solid #5c5674;
		box-sizing: border-box;
		cursor: pointer;
		height: $gameItemHeight;
		width: $gameItemWidth;

		.top-zone {
			position: relative;
			height: $topZoneHeight;
			width: 100%;
			overflow: hidden;

			.image {
			    background-position: 0 0;
			    background-size: 100%;
			    background-repeat: no-repeat;
			    box-shadow: 0 -36px 90px #4b456e inset;
			    position: relative;
			    transition: all .3s;
				height: 100%;
				width: 100%;
			}

			.jackpot-value {
				background-color: rgba(0, 0, 0, .5);
				color: #c7c3d9;
				font-size: 13px;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 35px;
				line-height: 35px;
				text-align: center;
			}
		}

		.bottom-zone {
			background-color: $themeBkColor1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: $bottomZoneHeight;
			line-height: $bottomZoneHeight;
			width: 100%;
			font-size: 12px;
			text-align: left;

			.name {
				box-sizing: border-box;
				color: #c7c3d9;
				flex: 5;
				padding-left: 10px;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.star {
				background-position: 0, 0;
				box-sizing: border-box;
				flex: 1;
				padding-right: 5px;

				@keyframes star-animate {
					0% {
						transform: scale(1)
					},

					50% {
						transform: scale(2)
					},

					100% {
						transform: scale(1)
					}
				}

				.star-icon {
					background-image: url(../../assets/common.png);
					background-position: -25px -87px;
					width: 15px;
					height: 15px;
				}

				.collected {
					animation: star-animate .5s linear;
					background-position: -4px -87px;
				}
			}
		}
	}
</style>