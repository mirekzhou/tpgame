<template>
	<div class="page slot-page">
		<div class="page-wrapper home-page-wrapper">
			<div class="swiper-zone">
				<div class="left-zone">
					<span class="left-arrow"></span>
				</div>

				<div class="middle-zone">
				    <swiper :options="swiperOption">
				        <swiper-slide>
				        	<img src="../../assets/slot-banner.png">
				        </swiper-slide>

				        <swiper-slide>
				        	<img src="../../assets/slot-banner.png">
				        </swiper-slide>

				        <swiper-slide>
				        	<img src="../../assets/slot-banner.png">
				        </swiper-slide>

				        <swiper-slide>
				        	<img src="../../assets/slot-banner.png">
				        </swiper-slide>
				    </swiper>
				</div>

				<div class="right-zone">
					<span class="right-arrow"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';

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
		        }
			}
		},

		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide
		},

		methods: {
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.slot-page {
		.swiper-zone {
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
					img {
						width: 100%;
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