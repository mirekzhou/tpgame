<template>
	<div class="page home-page">
		<div class="page-wrapper home-page-wrapper">
			<div class="left-zone">
				<span class="left-arrow"></span>
			</div>

			<div class="middle-zone">
			    <swiper :options="swiperOption">
			        <swiper-slide>
			        	<div class="swiper-slide-wrapper">
							<div class="middle-zone-left">
								<div class="middle-zone-left-wrapper">
									<div class="line1">新手100%首存</div>
									<div class="line2">世界体育新上线</div>
									<div class="line3">
										<div class="button" v-on:click="showLoginDialog">点击进入</div>
									</div>
								</div>
							</div>

							<div class="middle-zone-right">
								<img src="../../assets/home-page-banner1.png">
							</div>
							<div class="clear"></div>
						</div>
			        </swiper-slide>

			        <swiper-slide>
			        	<div class="swiper-slide-wrapper">
							<div class="middle-zone-left">
								<div class="middle-zone-left-wrapper">
									<div class="line1">新手100%首存</div>
									<div class="line2">世界体育新上线</div>
									<div class="line3">
										<div class="button">点击进入</div>
									</div>
								</div>
							</div>

							<div class="middle-zone-right">
								<img src="../../assets/home-page-banner2.png">
							</div>
							<div class="clear"></div>
						</div>
			        </swiper-slide>

			        <swiper-slide>
			        	<div class="swiper-slide-wrapper">
							<div class="middle-zone-left">
								<div class="middle-zone-left-wrapper">
									<div class="line1">新手100%首存</div>
									<div class="line2">世界体育新上线</div>
									<div class="line3">
										<div class="button">点击进入</div>
									</div>
								</div>
							</div>

							<div class="middle-zone-right">
								<img src="../../assets/home-page-banner1.png">
							</div>
							<div class="clear"></div>
						</div>
			        </swiper-slide>

			        <swiper-slide>
			        	<div class="swiper-slide-wrapper">
							<div class="middle-zone-left">
								<div class="middle-zone-left-wrapper">
									<div class="line1">新手100%首存</div>
									<div class="line2">世界体育新上线</div>
									<div class="line3">
										<div class="button">点击进入</div>
									</div>
								</div>
							</div>

							<div class="middle-zone-right">
								<img src="../../assets/home-page-banner2.png">
							</div>
							<div class="clear"></div>
						</div>
			        </swiper-slide>
			    </swiper>
			</div>

			<div class="right-zone">
				<span class="right-arrow"></span>
			</div>

			<page-naver></page-naver>
		</div>
	</div>
</template>

<script>
	import pageNaver from './pageNaver';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';

	export default {
		name: 'home-page',
		
		data: function () {
			return {
		        swiperOption: {
		          	pagination: '.swiper-pagination',
		          	paginationClickable: true,
			        prevButton:'.left-arrow',
			        nextButton:'.right-arrow',
			        spaceBetween: 100
		        },

		        x: true
			}
		},

		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide,
			'page-naver' : pageNaver
		},

		methods: {
			showLoginDialog: function () {
				this.x = !this.x;
				this.$store.dispatch('switchLoginDialog', {status: this.x});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		height: 550px;

		.home-page-wrapper {
			position: relative;

			.left-zone {
				position: absolute;
				left: 0;
				top: 0;
				height: 100%;
				width: 60px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;

				.left-arrow {
					background-image: url(../../assets/page-left-arrow.png);
					cursor: pointer;
					height: 60px;
					width: 60px;

					&:hover {
						background-image: url(../../assets/page-left-arrow-active.png);
					}
				}
			}

			.middle-zone {
				position: absolute;
				left: 60px;
				right: 60px;
				top: 0;
				height: 100%;

				.swiper-slide-wrapper {
					display: flex;
				    -webkit-user-select: none;
				    user-select: none;

					.middle-zone-left {
						-webkit-flex: 1;
						flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;

						.line1 {
							color: #cb78e0;
							font-weight: bold;
							font-size: 50px;
						}

						.line2 {
							color: #FFF;
							font-weight: bold;
							font-size: 70px;
							margin-top: 5px;
						}

						.line3 {
							width: 100%;
							text-align: center;
							margin-top: 20px;

							.button {
								background-color: #2a2344;
								color: #cb78e0;
								cursor: pointer;
								display: inline-block;
								font-size: 18px;
								height: 50px;
								line-height: 50px;
								width: 180px;
								text-align: center;
							}
						}
					}

					.middle-zone-right {
						-webkit-flex: 1;
						flex: 1;
						display: flex;
						flex-direction: row;
						justify-content: space-around;
						align-items: center;
						overflow: hidden;

						img {
							width: 90%;
							max-width: 550px;
						}
					}
				}
			}

			.right-zone {
				position: absolute;
				right: 0;
				top: 0;
				height: 100%;
				width: 60px;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;

				.right-arrow {
					background-image: url(../../assets/page-right-arrow.png);
					cursor: pointer;
					height: 60px;
					width: 60px;

					&:hover {
						background-image: url(../../assets/page-right-arrow-active.png);
					}
				}
			}
		}
	}
</style>