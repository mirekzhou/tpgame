<template>
	<div class="platform-item">
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
			'className'
		]
	}
</script>

<style lang="scss" scoped>
	$slotWrapperL            :    1140;
	$slotWrapperWidth        :    1140px;
	$platformZoneHeight      :    $slotWrapperWidth * 66 / $slotWrapperL;
	$platformItemWidth       :    $slotWrapperWidth * 140 / $slotWrapperL;
	$normalTop               :    -64px;
	$activeTop               :    -1px;

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
			    background-position: -1px -309px;
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
						left: 0;
						top: 0;
						border-width: 1px 0 0 1px;
						content: '';
						border-style: solid;
						position: absolute;
						z-index: 9;
						width: 10px;
						height: 10px;
						border-color: rgba(120, 161, 255, 0.95);
						transition: all 0.25s;
					}

					&:after {
						left: -7px;
						top: -7px;
						border-width: 2px 0 0 2px;
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
				}

				.corners-inner__tr {
					position: absolute;
					top: 0;
					right: 0;
					bottom: auto;
					left: auto;
					z-index: 2;

					&:before {
						right: 0;
						top: 0;
						border-width: 1px 1px 0 0;
						content: '';
						border-style: solid;
						position: absolute;
						z-index: 9;
						width: 10px;
						height: 10px;
						border-color: rgba(120, 161, 255, 0.95);
						transition: all 0.25s;
					}

					&:after {
						right: -7px;
						top: -7px;
						border-width: 2px 2px 0 0;
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
				}

				.corners-inner__bl {
					position: absolute;
					top: auto;
					right: auto;
					bottom: 0;
					left: 0;
					z-index: 2;

					&:before {
						left: 0;
						bottom: 0;
						border-width: 0 0 1px 1px;
						content: '';
						border-style: solid;
						position: absolute;
						z-index: 9;
						width: 10px;
						height: 10px;
						border-color: rgba(120, 161, 255, 0.95);
						transition: all 0.25s;
					}

					&:after {
						left: -7px;
						bottom: -7px;
						border-width: 0 0 2px 2px;
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
				}	

				.corners-inner__br {
					position: absolute;
					top: auto;
					right: 0;
					bottom: 0;
					left: auto;
					z-index: 2;

					&:before {
						right: 0;
						bottom: 0;
						border-width: 0 1px 1px 0;
						content: '';
						border-style: solid;
						position: absolute;
						z-index: 9;
						width: 10px;
						height: 10px;
						border-color: rgba(120, 161, 255, 0.95);
						transition: all 0.25s;
					}

					&:after {
						right: -7px;
						bottom: -7px;
						border-width: 0 2px 2px 0;
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
				}
			}

			&:hover {
				&:after {
					opacity: 1;
				}

				.corners-outer {
					opacity: 1;
				    filter: alpha(opacity=100);

					.corners-inner__tl {
						&:after {
							width: 15px;
							height: 15px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: hoverTl;
						}

						&:before {
							width: 12px;
							height: 12px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: innerBtn;
						}
					}

					.corners-inner__tr {
						&:after {
							width: 15px;
							height: 15px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: hoverTr;
						}

						&:before {
							width: 12px;
							height: 12px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: innerBtn;
						}
					}

					.corners-inner__bl {
						&:after {
							width: 15px;
							height: 15px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: hoverBl;
						}

						&:before {
							width: 12px;
							height: 12px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: innerBtn;
						}
					}

					.corners-inner__br {
						&:after {
							width: 15px;
							height: 15px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: hoverBr;
						}

						&:before {
							width: 12px;
							height: 12px;
							animation-duration: 1s;
							animation-delay: 0s;
							animation-fill-mode: both;
							animation-duration: 1.1s;
							animation-iteration-count: 100;
							animation-name: innerBtn;
						}
					}
				}
			}
		}

		.platform-pp {
			span {
				background-position: -420px $normalTop;
			}

			&:hover {
				span {
					background-position: -420px $activeTop;
				}
			}
		}

		.platform-pt {
			span {
				background-position: -280px $normalTop;
			}

			&:hover {
				span {
					background-position: -280px $activeTop;
				}
			}
		}

		.platform-bbin {
			span {
				background-position: -140px $normalTop;
			}

			&:hover {
				span {
					background-position: -140px $activeTop;
				}
			}
		}

		.platform-mg {
			span {
				background-position: -560px $normalTop;
			}

			&:hover {
				span {
					background-position: -560px $activeTop;
				}
			}
		}

		.platform-ag {
			span {
				background-position: 0 $normalTop;
			}

			&:hover {
				span {
					background-position: 0 $activeTop;
				}
			}
		}

		.platform-ttg {
			span {
				background-position: -700px $normalTop;
			}

			&:hover {
				span {
					background-position: -700px $activeTop;
				}
			}
		}

		.platform-mt {
			span {
				background-position: -700px $normalTop;
			}

			&:hover {
				span {
					background-position: -700px $activeTop;
				}
			}
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
</style>