<template>
	<div class="input" v-bind:style="{width: myWidth + 'px', height:myHeight + 'px'}">
		<input ref="input"
			   v-bind:value="value"
			   v-on:input="updateValue($event.target.value)"
			   v-bind:placeholder="myPlaceholder" 
			   v-bind:style="{width: myWidth + 'px', height:myHeight + 'px'}" />
	</div>
</template>

<script>
	export default {
		name: 'my-input',

		props: {
			myPlaceholder: [String],
			myWidth: [Number, String],
			myHeight: [Number, String],
			value: [Number, String]
		},
		
		data: function () {
			return {
				width: this.myWidth,
				height: this.myHeight,
				placeholder: this.myPlaceholder
			}
		},

		methods: {
			updateValue: function (value) {
				//this.$refs.input.value = value;  //通过this.$refs.input可以访问input元素
				this.$emit('input', value);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input {
		border-bottom: 1px solid rgba(58, 59, 63, 1);
		display: inline-block;
		
		input {
			background: none;
			border: 0;
			outline: none;
		}
	}
</style>