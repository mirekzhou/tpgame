<template>
	<div class="login">
		<my-dialog :showDialog="showLogin">
			<div slot="header">
				伟易博
			</div>

			<div slot="body">
<!-- 				<span>用户名</span>
				<normal-input :placeholder="请输入您的用户名"></normal-input>
				<span>密码</span>
				<normal-input :placeholder="请输入您的密码"></normal-input> -->
			</div>

			<div slot="footer">
				我是Footer
			</div>
		</my-dialog>
	</div>
</template>

<script>
	import dialog from '../plugins/dialog';
	import input from '../plugins/input';

	export default {
		name: 'login',

		props: [
			'showLogin'
		],
		
		data: function () {
			return {
			}
		},

		components: {
			'my-dialog': dialog,
			'normal-input': input
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.login {
	}
</style>