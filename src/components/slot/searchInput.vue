<template>
	<div class="input-search">
		<input type="text" :placeholder="placeholder">
		<span class="icon"></span>
	</div>
</template>

<script>
	export default {
		name: 'input-search',

		props: [
			'placeholder',
			'reg'
		]
	}
</script>

<style lang="scss" scoped>
	$slotWrapperL            :    1140;
	$slotWrapperWidth        :    1140px;
	$inputSearchHeight       :    $slotWrapperWidth * 40 / $slotWrapperL;
	$inputSearchWidth        :    $slotWrapperWidth * 230 / $slotWrapperL;
	$searchInputBkColor      :    #27285b;

	.input-search {
		background-color: $searchInputBkColor;
		border: 1px solid #5c5674;
		display: inline-block;
		box-sizing: border-box;
		width: $inputSearchWidth;
		height: $inputSearchHeight;
		line-height: $inputSearchHeight;
		position: relative;

		input {
			background: none;
			border: 0;
			color: #c7c3d9;
			outline: none;
			height: $inputSearchHeight - 3px;
			line-height: $inputSearchHeight - 3px;
			vertical-align: top;
			width: 100%;
			text-indent: 12px;
		}

		.icon {
			background-image: url(../../assets/common.png);
			background-position: -196px -83px;
			cursor: pointer;
			display: inline-block;
    		position: absolute;
    		right: 20px;
    		top: ($inputSearchHeight - 20px) / 2;
			width: 17px;
			height: 20px;
		}
	}
</style>