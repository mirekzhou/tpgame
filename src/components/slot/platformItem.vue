<template>
	<div class="platform-item" v-on:click="itemClicked" v-bind:class="[{'platform-item-selected': selected}]">
		<a v-bind:class="[className]">
			<span></span>

			<div class="corners-outer">
				<div class="corners-inner__tl"></div>
				<div class="corners-inner__tr"></div>
				<div class="corners-inner__bl"></div>
				<div class="corners-inner__br"></div>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'platform-item',

		props: [
			'name',
			'platform',
			'className',
			'selected'
		],

		methods: {
			itemClicked: function () {
				this.$emit('itemClicked', this.platform);
			}
		}
	}
</script>

<style lang="scss" scoped>
	$slotWrapperL            :    1140;
	$slotWrapperWidth        :    1140px;
	$platformZoneHeight      :    $slotWrapperWidth * 66 / $slotWrapperL;
	$platformItemWidth       :    $slotWrapperWidth * 140 / $slotWrapperL;
	$normalTop               :    -64px;
	$activeTop               :    -1px;

	@mixin platform-item-span($top) {
		span {
			background-position: $top $normalTop;
		}

		&:hover {
			span {
				background-position: $top $activeTop;
			}
		}
	}

	@mixin platform-item-span-selected($top) {
		span {
			background-position: $top $activeTop;
		}
	}

	@mixin normal-after-common {
		content: '';
		border-style: solid;
		position: absolute;
		z-index: 9;
		width: 12px;
		height: 12px;
		border-color: rgba(255, 255, 255, 0.07);
		-ms-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		transition: border-color, transform .55s;
	}

	@mixin normal-before-common {
		content: '';
		border-style: solid;
		position: absolute;
		z-index: 9;
		width: 10px;
		height: 10px;
		border-color: rgba(120, 161, 255, 0.95);
		transition: all 0.25s;
	}

	@mixin hover-after-common {
		width: 15px;
		height: 15px;
		animation-duration: 1s;
		animation-delay: 0s;
		animation-fill-mode: both;
		animation-duration: 1.1s;
		animation-iteration-count: 100;
		opacity: 1;
	}

	@mixin hover-and-selected-before-common {
		width: 12px;
		height: 12px;
		animation-duration: 1s;
		animation-delay: 0s;
		animation-fill-mode: both;
		animation-duration: 1.1s;
		animation-iteration-count: 100;
		animation-name: innerBtn;
	}

	@mixin selected-corners-inner-common {
		&:after {
			opacity: 0;
		}

		&:before {
			@include hover-and-selected-before-common;
		}
	}

	@mixin hover-corners-inner-common($animationName) {
		&:after {
			@include hover-after-common;
			animation-name: $animationName;
		}

		&:before {
			@include hover-and-selected-before-common;
		}
	}

	@keyframes hoverTl {
		0% {
		    border-right-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
		
		50% {
		    border-color: rgba(120, 161, 255, 0.35);
		    -ms-transform: translate3d(-2px, -2px, 0);
		    transform: translate3d(-2px, -2px, 0);
		}
		
		100% {
		    border-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
	}

	@keyframes hoverTr {
		0% {
		    border-right-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
		
		50% {
		    border-color: rgba(120, 161, 255, 0.35);
		    -ms-transform: translate3d(2px, -2px, 0);
		    transform: translate3d(2px, -2px, 0);
		}
		
		100% {
		    border-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
	}

	@keyframes hoverBl {
		0% {
		    border-right-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}

		50% {
		    border-color: rgba(120, 161, 255, 0.35);
		    -ms-transform: translate3d(-2px, 2px, 0);
		    transform: translate3d(-2px, 2px, 0);
		}

		100% {
		    border-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
	}

	@keyframes hoverBr {
		0% {
		    border-right-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
		
		50% {
		    border-color: rgba(120, 161, 255, 0.35);
		    -ms-transform: translate3d(2px, 2px, 0);
		    transform: translate3d(2px, 2px, 0);
		}
		
		100% {
		    border-color: rgba(255, 255, 255, 0.07);
		    -ms-transform: translate3d(0, 0, 0);
		    transform: translate3d(0, 0, 0);
		}
	}

	.platform-item {
		flex: 1;

		a {
			cursor: pointer;
			display: inline-block;
			height: $platformZoneHeight;
			line-height: $platformZoneHeight;
			text-align: center;
			padding: 1px;
			position: relative;

			span {
				background-image: url(../../assets/platforms.png);
				height: $platformZoneHeight - 8px;
				display: inline-block;
				width: $platformItemWidth;
				transition: opacity .33s;
			}

			&:after {
				content: '';
			    opacity: 0;
			    filter: alpha(opacity=0);
			    position: absolute;
			    top: 0;
			    right: 0;
			    bottom: 0;
			    left: 0;
			    z-index: -1;
			    background-image: url(../../assets/common.png);
			    background-repeat: no-repeat;
			}

			.corners-outer {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: inherit;
				opacity: 0;
			    filter: alpha(opacity=0);
			    transition: opacity 0.25s;

				.corners-inner__tl {
					position: absolute;
					top: 0;
					right: auto;
					bottom: auto;
					left: 0;
					z-index: 2;

					&:before {
						@include normal-before-common;

						left: 0;
						top: 0;
						border-width: 1px 0 0 1px;
					}

					&:after {
						@include normal-after-common;

						left: -7px;
						top: -7px;
						border-width: 2px 0 0 2px;
					}
				}

				.corners-inner__tr {
					position: absolute;
					top: 0;
					right: 0;
					bottom: auto;
					left: auto;
					z-index: 2;

					&:before {
						@include normal-before-common;

						right: 0;
						top: 0;
						border-width: 1px 1px 0 0;
					}

					&:after {
						@include normal-after-common;

						right: -7px;
						top: -7px;
						border-width: 2px 2px 0 0;
					}
				}

				.corners-inner__bl {
					position: absolute;
					top: auto;
					right: auto;
					bottom: 0;
					left: 0;
					z-index: 2;

					&:before {
						@include normal-before-common;

						left: 0;
						bottom: 0;
						border-width: 0 0 1px 1px;
					}

					&:after {
						@include normal-after-common;

						left: -7px;
						bottom: -7px;
						border-width: 0 0 2px 2px;
					}
				}	

				.corners-inner__br {
					position: absolute;
					top: auto;
					right: 0;
					bottom: 0;
					left: auto;
					z-index: 2;

					&:before {
						@include normal-before-common;

						right: 0;
						bottom: 0;
						border-width: 0 1px 1px 0;
					}

					&:after {
						@include normal-after-common;

						right: -7px;
						bottom: -7px;
						border-width: 0 2px 2px 0;
					}
				}
			}

			&:hover {
				&:after {
					opacity: 1;
					background-position: 1.4px -110px;
				}

				.corners-outer {
					opacity: 1;
				    filter: alpha(opacity=100);

					.corners-inner__tl {
						&:after {
							@include hover-after-common;
							animation-name: hoverTl;
						}

						&:before {
							@include hover-and-selected-before-common;
						}
					}

					.corners-inner__tr {
						&:after {
							@include hover-after-common;
							animation-name: hoverTr;
						}

						&:before {
							@include hover-and-selected-before-common;
						}
					}

					.corners-inner__bl {
						&:after {
							@include hover-after-common;
							animation-name: hoverBl;
						}

						&:before {
							@include hover-and-selected-before-common;
						}
					}

					.corners-inner__br {
						&:after {
							@include hover-after-common;
							animation-name: hoverBr;
						}

						&:before {
							@include hover-and-selected-before-common;
						}
					}
				}
			}
		}

		.platform-pp {
			@include platform-item-span(-420px);
		}

		.platform-pt {
			@include platform-item-span(-280px);
		}

		.platform-bbin {
			@include platform-item-span(-140px);
		}

		.platform-mg {
			@include platform-item-span(-560px);
		}

		.platform-ag {
			@include platform-item-span(0);
		}

		.platform-ttg {
			@include platform-item-span(-700px);
		}

		.platform-mt {
			@include platform-item-span(-700px);
		}
	}

	.platform-item-selected {
		a {
			&:after {
				opacity: 1;
				background-position: 1.4px -182px;
			}

			.corners-outer {
				opacity: 1;
			    filter: alpha(opacity=100);

				.corners-inner__tl {
					@include selected-corners-inner-common;
				}

				.corners-inner__tr {
					@include selected-corners-inner-common;
				}

				.corners-inner__bl {
					@include selected-corners-inner-common;
				}

				.corners-inner__br {
					@include selected-corners-inner-common;
				}
			}
		}

		.platform-pp {
			@include platform-item-span-selected(-420px);
		}

		.platform-pt {
			@include platform-item-span-selected(-280px);
		}

		.platform-bbin {
			@include platform-item-span-selected(-140px);
		}

		.platform-mg {
			@include platform-item-span-selected(-560px);
		}

		.platform-ag {
			@include platform-item-span-selected(0);
		}

		.platform-ttg {
			@include platform-item-span-selected(-700px);
		}

		.platform-mt {
			@include platform-item-span-selected(-700px);
		}
	}
</style>