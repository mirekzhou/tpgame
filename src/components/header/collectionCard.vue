<template>
	<div class="collection-card" 
		 v-bind:style="styleObject" 
		 v-show="showCollectionCard">

		<div class="collection-card-wrapper">
			<slot-game-item v-for          =  "item in collectedGames"
							:gameId        =  "item.GameLocal.Id"
							:identity      =  "item.GameLocal.GameIdentify"
							:isTry         =  "item.GameLocal.IsTry"
							:gameType      =  "item.GameLocal.GameTypeText_EN"
							:platform      =  "item.GameLocal.Api.GamePlatform"
							:cnname        =  "item.GameLocal.Title"
							:showJackpots  =  "false"
							:imageUrl      =  "item.GameLocal.ImageUrl"
							:collected     =  "true"
							:collectedId   =  "item.Id"
							key            =  "item">
			</slot-game-item>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import slotGameItem from '../slot/slotGameItem';

	export default {
		name: 'collection-card',
		
		props: [
			'styleObject',
			'showCollectionCard',
		],

		data: function () {
			return {
			}
		},

		mounted: function () {
			this.$store.dispatch('getCollectedGames');
		},

		components: {
			'slot-game-item': slotGameItem
		},

		methods: {
		},

	  	computed: mapState({
	  		collectedGames: function (state) {
	  			return state.collectedGames;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.collection-card {
		background-color: #252558;
		width: 100%;
		position: absolute;
		left: 0;
		top: -300px;

		.collection-card-wrapper {
			padding: 20px 33px 10px 33px;
			width: 1140px;
			margin: 0 auto;
			display: inline-flex;
			flex-direction: row;
			flex-wrap: wrap;

			.slot-game-item {
				margin-right: 55px;
				margin-bottom: 10px;
			}
		}
	}
</style>