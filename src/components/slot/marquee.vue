<template>
	<div class="marquee">
		<ul ref="ulSlider" v-on:mouseover="mouseover" v-on:mouseout="mouseout">
			<li v-for="item in list">
				<div class="name">{{item.name}}</div>
				<div class="value">111,112.00</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate';

	export default {
		name: 'marquee',

		data: function () {
			return {
			}
		},

		watch: {
			list: function (newValue, oldValue) {
				if (this.list.length > 6) {
					var that     = this;
					var top      = (0 - (this.list.length - 6) * 70) + 'px';
					var duration = (this.list.length - 6) * 1500;

					this.$nextTick(function () {
						var animate = function () {
							Velocity(
								that.$refs.ulSlider, 
								{
									top: top
								}, 
								{
									duration: duration,
									complete: function () {
										Velocity(that.$refs.ulSlider, {top: '0px'}, {duration: 0});
										animate();
									}
								}
							);
						};

						animate();
					});
					
				}
			}
		},

		props: [
			'list'
		],

		methods: {
			mouseover: function () {
				Velocity(this.$refs.ulSlider, 'pause');
			},

			mouseout: function () {
				Velocity(this.$refs.ulSlider, 'resume');
			}
		}
	}
</script>

<style lang="scss" scoped>
	$slotWrapperL            :    1140;
	$slotWrapperWidth        :    1140px;
	$marqueeWidth            :    $slotWrapperWidth * 230 / $slotWrapperL;
	$marqueeItemHeight       :    $slotWrapperWidth * 70 / $slotWrapperL;

	.marquee {
		border: 1px solid #5c5674;
		width: $marqueeWidth;
		height: $marqueeItemHeight * 6;
		overflow: hidden;
		position: relative;

		ul {
			background-color: #332d4e;
			box-sizing: border-box;
			list-style: none;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			transition-property: top;
			transition-timing-function: linear;

			li {
				box-sizing: border-box;
				border-bottom: 1px solid #3a3453;
				height: $marqueeItemHeight;
				display: flex;

				.name {
					color: #c7c3d9;
					flex: 1;
					height: $marqueeItemHeight;
					line-height: $marqueeItemHeight;
					text-align: left;
					padding-left: 15px;
				}

				.value {
					color: #FFF;
					flex: 1;
					height: $marqueeItemHeight;
					line-height: $marqueeItemHeight;
					text-align: left;
				}
			}

			&:hover {
				animation-play-state: paused !important;
			}
		}
	}
</style>