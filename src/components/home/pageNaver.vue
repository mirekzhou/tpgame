<template>
	<div class="page-naver">
		<div class="page-naver-wrapper">
			<div v-for="item in items" 
				 class="naver-item" 
				 v-bind:class="item.className" 
				 v-on:mouseover="playAudio($event)"
				 v-on:mouseout="stopAudio($event)">

				<div class="img"></div>
				<div class="name">{{item.textName}}</div>
				<audio v-bind:src="item.audioSrc">您的浏览器不支持 audio 标签。</audio>
			</div>
		</div>
	</div>
</template>

<script>
	import mp31 from '../../assets/live.mp3';
	import mp32 from '../../assets/sport.mp3';

	export default {
		name: 'page-naver',
		
		data: function () {
			return {
				items: [
					{
						className: 'naver-sport',
						audioSrc : mp31,
						textName : '体育竞技'
					},
					{
						className: 'naver-live',
						audioSrc : mp32,
						textName : '真人娱乐'
					},
					{
						className: 'naver-slot',
						audioSrc : mp31,
						textName : '电子游艺'
					},
					{
						className: 'naver-lottery',
						audioSrc : mp32,
						textName : '彩票游戏'
					},
					{
						className: 'naver-egaming',
						audioSrc : mp31,
						textName : '电子竞技'
					}
				]
			}
		},

		components: {
		},

		methods: {
			playAudio: function (event) {
				//【1】 关于v-ref在v-for里面使用的问题:
				// As I mentioned in the previous issue, v-ref inside v-for is a rabbit hole, 
				// supporting it leads to more problems than convenience 
				// when you can just give your component a class name and do this.$el.querySelectorAll('...').

				//【2】 注意元素绑定方法是传参的方法： $event
				event.currentTarget.querySelector('audio').play();
			},

			stopAudio: function (event) {
				event.currentTarget.querySelector('audio').pause();
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

				.img {
				    height: 100%;
				    background-size: 100%;
				    margin-top: -30%;
				    background-repeat: no-repeat;
				    transition: all .1s;
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

				audio {
					display: none;
				}

				&:hover {
					.name {
						color: #FFF;
					}

					audio {
						display: block;
					}
				}
			}

			.naver-sport {
				background-image: url(../../assets/naver-sport.png);

				.img {
					background-image: url(../../assets/naver-sport-img.png);
				}

				&:hover {
					background-image: url(../../assets/naver-sport-active.png);

					.img {
						background-image: url(../../assets/naver-sport-img-active.png);
					}
				}
			}

			.naver-live {
				background-image: url(../../assets/naver-live.png);

				.img {
					background-image: url(../../assets/naver-live-img.png);
				}

				&:hover {
					background-image: url(../../assets/naver-live-active.png);

					.img {
						background-image: url(../../assets/naver-live-img-active.png);
					}
				}
			}

			.naver-slot {
				background-image: url(../../assets/naver-slot.png);

				.img {
					background-image: url(../../assets/naver-slot-img.png);
				}

				&:hover {
					background-image: url(../../assets/naver-slot-active.png);

					.img {
						background-image: url(../../assets/naver-slot-img-active.png);
					}
				}
			}

			.naver-lottery {
				background-image: url(../../assets/naver-lottery.png);

				.img {
					background-image: url(../../assets/naver-lottery-img.png);
				}

				&:hover {
					background-image: url(../../assets/naver-lottery-active.png);

					.img {
						background-image: url(../../assets/naver-lottery-img-active.png);
					}
				}
			}

			.naver-egaming {
				background-image: url(../../assets/naver-egaming.png);

				.img {
					background-image: url(../../assets/naver-egaming-img.png);
				}

				&:hover {
					background-image: url(../../assets/naver-egaming-active.png);

					.img {
						background-image: url(../../assets/naver-egaming-img-active.png);
					}
				}
			}
		}
	}
</style>