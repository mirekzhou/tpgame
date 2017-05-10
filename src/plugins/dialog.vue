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
		        </div>
		    </div>
	    </div>
  	</transition>
</template>

<script>
	export default {
		name: 'dialog',

		props: [
			'zIndex',
			'showDialog',
			'styleObject'
		]
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

				.dialog-header {
				}

				.dialog-body {
				}

				.dialog-footer {
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