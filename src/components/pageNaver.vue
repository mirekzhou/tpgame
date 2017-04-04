<template>
	<div class="page-naver">
		<div class="page-naver-wrapper">
			<div class="naver-item naver-sport">
				<div class="img"></div>
				<div class="name">体育竞技</div>
				<audio src="../assets/sport.mp3" autoplay="autoplay">您的浏览器不支持 audio 标签。</audio>
			</div>

			<div class="naver-item naver-live">
				<div class="img"></div>
				<div class="name">真人娱乐</div>
				<audio src="../assets/live.mp3" autoplay="autoplay">您的浏览器不支持 audio 标签。</audio>
			</div>

			<div class="naver-item naver-slot">
				<div class="img"></div>
				<div class="name">电子游艺</div>
			</div>

			<div class="naver-item naver-lottery">
				<div class="img"></div>
				<div class="name">彩票游戏</div>
			</div>

			<div class="naver-item naver-egaming">
				<div class="img"></div>
				<div class="name">电子竞技</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'page-naver',
		
		data: function () {
			return {
			}
		},

		components: {
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$naver-item-height: 250px;
	$naver-name-height: 60px;

	.page-naver {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: $naver-item-height;

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
				background-image: url(../assets/naver-sport.png);

				.img {
					background-image: url(../assets/naver-sport-img.png);
				}

				&:hover {
					background-image: url(../assets/naver-sport-active.png);

					.img {
						background-image: url(../assets/naver-sport-img-active.png);
					}
				}
			}

			.naver-live {
				background-image: url(../assets/naver-live.png);

				.img {
					background-image: url(../assets/naver-live-img.png);
				}

				&:hover {
					background-image: url(../assets/naver-live-active.png);

					.img {
						background-image: url(../assets/naver-live-img-active.png);
					}
				}
			}

			.naver-slot {
				background-image: url(../assets/naver-slot.png);

				.img {
					background-image: url(../assets/naver-slot-img.png);
				}

				&:hover {
					background-image: url(../assets/naver-slot-active.png);

					.img {
						background-image: url(../assets/naver-slot-img-active.png);
					}
				}
			}

			.naver-lottery {
				background-image: url(../assets/naver-lottery.png);

				.img {
					background-image: url(../assets/naver-lottery-img.png);
				}

				&:hover {
					background-image: url(../assets/naver-lottery-active.png);

					.img {
						background-image: url(../assets/naver-lottery-img-active.png);
					}
				}
			}

			.naver-egaming {
				background-image: url(../assets/naver-egaming.png);

				.img {
					background-image: url(../assets/naver-egaming-img.png);
				}

				&:hover {
					background-image: url(../assets/naver-egaming-active.png);

					.img {
						background-image: url(../assets/naver-egaming-img-active.png);
					}
				}
			}
		}
	}
</style>