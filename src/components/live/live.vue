<template>
	<div class="page live-page">
		<div class="page-wrapper live-page-wrapper">
			<div class="swiper-zone">
				<span class="left-arrow"></span>

			    <swiper :options="swiperOption">
			        <swiper-slide v-for="banner in banners">
			        	<img :src="banner" style="width:100% !important">
			        </swiper-slide>
			    </swiper>

				<span class="right-arrow"></span>
			</div>

			<div class="platforms-zone"></div>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import liveBanner from '../../assets/live-banner.png';

	export default {
		name: 'live-page',
		
		data: function () {
			return {
		        swiperOption: {
		          	pagination: '.swiper-pagination',
		          	paginationClickable: true,
			        prevButton:'.left-arrow',
			        nextButton:'.right-arrow',
			        spaceBetween: 100,
			        autoHeight: true
		        },

		        banners: [
		        	liveBanner,
		        	liveBanner,
		        	liveBanner,
		        	liveBanner
		        ]
			}
		},

		components: {
			'swiper'         : swiper,
			'swiper-slide'   : swiperSlide
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.live-page {
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

		.platforms-zone {
			background-image: url('../../assets/live-bg.png');
			width: 100%;
			min-height: 800px;
			margin-top: -5px;
		}
	}
</style>