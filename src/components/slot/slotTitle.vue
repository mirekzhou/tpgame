<template>
	<div class="slot-title">
		<div class="text">{{title}}</div>
		<div class="stick"></div>
	</div>
</template>

<script>
	export default {
		name: 'slot-title',

		props: [
			'title'
		]
	}
</script>

<style lang="scss" scoped>
	.slot-title {
		margin: 10px 0;

		.text {
			color: #cfced5;
			height: 35px;
			line-height: 35px;
			font-size: 22px;
		}

		.stick {
			background-color: #c46be7; 
			height: 2px;
			width: 70px;
		}
	}
</style>