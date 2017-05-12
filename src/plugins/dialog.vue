<template>
 	<transition name="dialog">
	    <div class="dialog-mask" v-show="showDialog">
		    <div class="dialog-wrapper">
		        <div class="dialog-container" v-bind:style="styleObject">
		          	<div class="dialog-header">
		            	<slot name="header"></slot>
		         	</div>

		          	<div class="dialog-body">
		            	<slot name="body"></slot>
		          	</div>

		          	<div class="dialog-footer">
		            	<slot name="footer">
			              	default footer
			              	<button class="dialog-default-button" @click="$emit('close')">
			                	OK
			              	</button>
		            	</slot>
		          	</div>

					<div class="spinner-overlay" v-show="showSpinner">
						<!-- <sync-loader></sync-loader> -->
						<scale-loader></scale-loader>
<!-- 						<cube-spin></cube-spin>
						<rotate-square2></rotate-square2>
						<rotate-square3></rotate-square3>
						<rotate-square4></rotate-square4>
						<rotate-square5></rotate-square5>
						<rotate-square6></rotate-square6> -->
					</div>
		        </div>
		    </div>
	    </div>
  	</transition>
</template>

<script>
	import SyncLoader from 'vue-spinner/src/SyncLoader.vue';
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
	import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

	import CubeSpin from 'vue-loading-spinner/src/components/Circle';
	import RotateSquare2 from 'vue-loading-spinner/src/components/RotateSquare2';
	import RotateSquare3 from 'vue-loading-spinner/src/components/RotateSquare3';
	import RotateSquare4 from 'vue-loading-spinner/src/components/RotateSquare4';
	import RotateSquare5 from 'vue-loading-spinner/src/components/RotateSquare5';
	import RotateSquare6 from 'vue-loading-spinner/src/components/RotateSquare6';

	export default {
		name: 'dialog',

		props: [
			'zIndex',
			'showSpinner',
			'showDialog',
			'styleObject'
		],

		components: {
			'sync-loader': SyncLoader,
			'pulse-loader': PulseLoader,
			'scale-loader': ScaleLoader,
			'cube-spin': CubeSpin,
			'rotate-square2': RotateSquare2,
			'rotate-square3': RotateSquare3,
			'rotate-square4': RotateSquare4,
			'rotate-square5': RotateSquare5,
			'rotate-square6': RotateSquare6
		}
	}
</script>

<style lang="scss" scoped>
	.dialog-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;

		.dialog-wrapper {
			display: table-cell;
			vertical-align: middle;

			.dialog-container {
				color: #9992ae;
				margin: 0px auto;
				background-color: #fff;
				border-radius: 2px;
				box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
				transition: all .3s ease;
				font-family: Helvetica, Arial, sans-serif;
				position: relative;

				.spinner-overlay {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: rgba(19, 16, 30, .85);

					.v-spinner {
						display: inline-block;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -25px;
					}

					svg {
						display: inline-block;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -25px;
					}

					.spinner {
						display: inline-block;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -20px;
					}
				}
			}
		}
	}

	.dialog-enter {
		opacity: 0;

		.dialog-container {
		  	-webkit-transform: scale(1.1);
		  	transform: scale(1.1);
		}
	}

	.dialog-leave-active {
		opacity: 0;

		.dialog-container {
		  	-webkit-transform: scale(1.1);
		  	transform: scale(1.1);
		}
	}
</style>