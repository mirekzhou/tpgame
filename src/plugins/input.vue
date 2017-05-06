<template>
	<div class="input">
		<input ref="input"
			   v-bind:value="value"
			   v-on:input="updateValue($event.target.value)"
			   v-bind:placeholder="myPlaceholder" 
			   v-bind:style="styleObject" />
	</div>
</template>

<script>
	export default {
		name: 'my-input',

		props: [
			'styleObject',
			'myPlaceholder',
			'value'
		],
		
		data: function () {
			return {
				width: this.myWidth || 320,
				height: this.myHeight || 38,
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
			color: #9992ae;
			outline: none;
			text-indent: 8px;
		}
	}
</style>