<template>
	<div class="page-naver">
		<div class="page-naver-wrapper">
			<div v-for="item in items" 
				 class="naver-item" 
				 v-bind:class="item.className" 
				 v-on:mouseover="playAudio($event, item.imgActiveSrc)"
				 v-on:mouseout="stopAudio($event, item.imgSrc)">

				<img :src="item.imgSrc">
				<div class="name">{{item.textName}}</div>
				<div class="naver-item-overlay"></div>
				<audio v-bind:src="item.audioSrc">您的浏览器不支持 audio 标签。</audio>
			</div>
		</div>
	</div>
</template>

<script>
	import mp31 from '../../assets/live.mp3';
	import mp32 from '../../assets/sport.mp3';
	import naverSportImg from '../../assets/naver-sport-img.png';
	import naverSportImgActive from '../../assets/naver-sport-img-active.png';
	import naverSlotImg from '../../assets/naver-slot-img.png';
	import naverSlotImgActive from '../../assets/naver-slot-img-active.png';
	import naverLiveImg from '../../assets/naver-live-img.png';
	import naverLiveImgActive from '../../assets/naver-live-img-active.png';
	import naverEgamingImg from '../../assets/naver-egaming-img.png';
	import naverEgamingImgActive from '../../assets/naver-egaming-img-active.png';
	import naverLotteryImg from '../../assets/naver-lottery-img.png';
	import naverLotteryImgActive from '../../assets/naver-lottery-img-active.png';

	export default {
		name: 'page-naver',
		
		data: function () {
			return {
				items: [
					{
						className    : 'naver-sport',
						audioSrc     : mp31,
						textName     : '体育竞技',
						imgSrc       : naverSportImg,
						imgActiveSrc : naverSportImgActive,
					},
					{
						className: 'naver-live',
						audioSrc : mp32,
						textName : '真人娱乐',
						imgSrc       : naverLiveImg,
						imgActiveSrc : naverLiveImgActive,
					},
					{
						className: 'naver-slot',
						audioSrc : mp31,
						textName : '电子游艺',
						imgSrc       : naverSlotImg,
						imgActiveSrc : naverSlotImgActive,
					},
					{
						className: 'naver-lottery',
						audioSrc : mp32,
						textName : '彩票游戏',
						imgSrc       : naverLotteryImg,
						imgActiveSrc : naverLotteryImgActive
					},
					{
						className: 'naver-egaming',
						audioSrc : mp31,
						textName : '电子竞技',
						imgSrc       : naverEgamingImg,
						imgActiveSrc : naverEgamingImgActive
					}
				]
			}
		},

		components: {
		},

		methods: {
			playAudio: function (event, imgActiveSrc) {
				//【1】 关于v-ref在v-for里面使用的问题:
				// As I mentioned in the previous issue, v-ref inside v-for is a rabbit hole, 
				// supporting it leads to more problems than convenience 
				// when you can just give your component a class name and do this.$el.querySelectorAll('...').

				//【2】 注意元素绑定方法是传参的方法： $event
				event.currentTarget.querySelector('audio').play();
				event.currentTarget.querySelector('img').src = imgActiveSrc;
			},

			stopAudio: function (event, imgSrc) {
				event.currentTarget.querySelector('audio').pause();
				event.currentTarget.querySelector('img').src = imgSrc;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$naver-item-height: 250px;
	$naver-name-height: 60px;

	.page-naver {
		width: 100%;
		height: $naver-item-height;
		margin-top: -4px;
	    z-index: 1;
	    position: relative;

		.page-naver-wrapper {
			display: flex;

			.naver-item {
				cursor: pointer;
				-webkit-flex: 1;
				flex: 1;
				height: $naver-item-height;
				text-align: center;
				position: relative;

				img {
					display: inline-block;
				    position: absolute;
				    bottom: 24%;
				    left: 0;
				    width: 100%;
				}

				.name {
					background-color: rgba(0, 0, 0, .4);
					width: 100%;
					font-size: 16px;
					height: $naver-name-height;
					line-height: $naver-name-height;
					text-align: center;
					color: #828283;
					position: absolute;
					left: 0;
					bottom: 0;
					transition: all .1s;
				}

				.naver-item-overlay {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: rgba(10, 9, 39, 0.4);
				}

				audio {
					display: none;
				}

				&:hover {
					.name {
						color: #FFF;
					}

					.naver-item-overlay {
						display: none;
					}

					audio {
						display: block;
					}
				}
			}

			.naver-sport {
				background: url(../../assets/naver-sport.png) center top no-repeat;
			}

			.naver-live {
				background: url(../../assets/naver-live.png) center top no-repeat;
			}

			.naver-slot {
				background: url(../../assets/naver-slot.png) center top no-repeat;
			}

			.naver-lottery {
				background: url(../../assets/naver-lottery.png) center top no-repeat;
			}

			.naver-egaming {
				background: url(../../assets/naver-egaming.png) center top no-repeat;
			}
		}
	}
</style>