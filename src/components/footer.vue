<template>
	<div class="footer">
		<div class="footer-wrapper"></div>
	</div>
</template>

<script>
	import input from '../plugins/input.vue';

	export default {
		name: 'footer',
		
		data: function () {
			return {
			}
		},

		components: {
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		background-color: #0c1135;
		border-top: 1px solid #090c2c;
		width: 100%;
		height: 100px;

		.footer-wrapper {
			background-image: url(../assets/footer.png);
			height: 100px;
			width: 1140px;
			margin: 0 auto;
		}
	}
</style>