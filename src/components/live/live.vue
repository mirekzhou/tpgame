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
		</div>
	</div>
</template>

<script>
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
		        }
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.live-page {
	}
</style>