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
		height: 1000px;

		iframe {
			min-height: 100%;
			width: 1000px;

		}
	}
</style>