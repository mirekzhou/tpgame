<template>
	<div class="page sport-page">
		<iframe src="http://188.vbetsport.com/zh-cn/Sport/Index"></iframe>
	</div>
</template>

<script>
	export default {
		name: 'sport-page',
		
		data: function () {
			return {
			}
		},

		method: {
		}
	}
</script>

<style lang="scss" scoped>
	.sport-page {
		height: auto;
		padding-bottom: 100px;

		iframe {
			height: 1200px;
			width: 1024px;
		}
	}
</style>