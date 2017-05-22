<template>
	<div class="drop-card" 
		 v-bind:style="styleObject" 
		 v-show="showDropCard">
		<ul>
			<li v-for="item in items" v-on:click="itemClicked(item)">
				<span>{{item.text}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'drop-card',

		props: [
			'styleObject',
			'showDropCard',
			'items'
		],

		methods: {
			itemClicked: function (data) {
				this.$emit('itemClicked', data);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.drop-card {
		border: 0;
		position: absolute;

		ul {
			border: 0;
			background-color: #262755;
			border: 1px solid #333465;
			border-top: none;
			list-style: none;

			li {
				border: 0;
				color: #FFF;
				cursor: pointer;
				height: 40px;
				line-height: 40px;
				text-align: center;

				&:hover {
					span {
						color: #f5bc44;
					}
				}
			}
		}
	}
</style>