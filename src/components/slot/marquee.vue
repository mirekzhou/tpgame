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

		/*
		** 当你设置 vm.someData = 'new value' ，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个“tick”更新。
		** 多数情况我们不需要关心这个过程，但是如果你想在 DOM 状态更新后做点什么，这就可能会有些棘手。
		** 虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们确实要这么做。
		** 为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用
		*/
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

	$themeBkColor1           :    #222355;

	.marquee {
		border: 1px solid #5c5674;
		border-top: 0;
		width: $marqueeWidth;
		height: $marqueeItemHeight * 6;
		overflow: hidden;
		position: relative;
		margin-top: -1px;

		ul {
			background-color: $themeBkColor1;
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