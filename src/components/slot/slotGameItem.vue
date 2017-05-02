<template>
	<div class="slot-game-item">
	</div>
</template>

<script>
	export default {
		name: 'slot-game-item',
		
		props: [
			'id',            //游戏Id
			'identify',      //游戏Identity
			'isTry',         //是否可以试玩
			'gameType',      //游戏类型
			'platform',      //游戏平台
			'collectid',     //收藏Id
			'collected',     //是否已经被收藏
			'cnname',        //游戏中文名称
			'showJackpots',  //是否显示奖金池
			'jackpotUrl',    //jackpot奖金池url
			'imageUrl'       //游戏图片url
		],

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
	$gameL                   :    1140;
	$gameWidth               :    1140px;
	$gameItemWidth           :    $gameWidth * 170 / $gameL;
	$gameItemHeight          :    $gameWidth * 146 / $gameL;

	.slot-game-item {
		border: 1px solid #5c5674;
		height: $gameItemHeight;
		width: $gameItemWidth;
	}
</style>