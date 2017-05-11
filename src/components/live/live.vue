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

			<div class="platforms-zone">
				<ul>
					<li v-for="item in platforms"></li>
				</ul>
			</div>
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
			        spaceBetween: 0,
			        autoHeight: true
		        },

		        banners: [
		        	liveBanner,
		        	liveBanner,
		        	liveBanner,
		        	liveBanner
		        ],

		        platforms: [
		        	{
		        		name: 'AG欧洲厅',
		        		description: '老牌真人视讯平台，游戏丰富精彩万分！'
		        	},
		        	{
		        		name: 'BBIN国际厅',
		        		description: '首创6张牌先发、美女主播互动 、体验至尊感觉！'
		        	},
		        	{
		        		name: 'SUNB亚洲厅',
		        		description: 'VIP包桌与超级多台游戏，尽享游戏！'
		        	},
		        	{
		        		name: 'AG欧洲厅',
		        		description: '极速百家乐, 体验畅快游戏！'
		        	},
		        	{
		        		name: 'BBIN国际厅',
		        		description: '首创6张牌先发、美女主播互动 、体验至尊感觉！'
		        	},
		        	{
		        		name: 'SUNB亚洲厅',
		        		description: '老牌真人视讯平台，游戏丰富精彩万分！'
		        	}
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
			background-size: 100%;
			width: 100%;
			min-height: 800px;
			margin-top: -5px;

			ul {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				width: 1170px;
				text-align: left;
				margin: 0 auto;

				li {
					border: 5px solid #4a4595;
					box-sizing: border-box;
					display: inline-block;
					vertical-align: top;
					width: 310px;
					height: 440px;
					margin-right: 80px;
					margin-top: 40px;
				}
			}
		}
	}
</style>