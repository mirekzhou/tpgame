<template>
	<div class="marquee">
		<ul>
			<li v-for="item in list">
				<div class="name">{{item.name}}</div>
				<div class="value">111,112.00</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'marquee',

		props: [
			'list'
		],

		mounted: function () {

		}
	}
</script>

<style lang="scss" scoped>
	$slotWrapperL            :    1140;
	$slotWrapperWidth        :    1140px;
	$marqueeWidth            :    $slotWrapperWidth * 230 / $slotWrapperL;
	$marqueeItemHeight       :    $slotWrapperWidth * 70 / $slotWrapperL;

	.marquee {
		border: 1px solid #5c5674;
		width: $marqueeWidth;
		height: $marqueeItemHeight * 6;
		overflow: hidden;

		ul {
			background-color: #332d4e;
			box-sizing: border-box;
			list-style: none;
			width: 100%;

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
		}
	}
</style>