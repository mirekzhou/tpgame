<template>
	<div id="app">
		<my-header></my-header>

		<transition name="fade">
		    <keep-alive>
		      	<router-view></router-view>
		    </keep-alive>
		</transition>
		
		<login></login>
		<alert></alert>
		<!-- <my-footer></my-footer> -->
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import login from './components/login';
	import header from './components/header.vue';
	import footer from './components/footer.vue';

	export default {
		name: 'app',
		
		mounted: function () {
			this.$store.dispatch('getLoginStatus');
		},

		components: {
			'my-header'  : header,
			'my-footer'  : footer,
			'login'      : login
		}
	}
</script>

<style lang="scss">
	html {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	body {
		background-image: url(assets/app-bg.png);
		background-color: #FFF;
		color: #FFF;
	}

	#app {
		.fade-enter-active, .fade-leave-active {
		  transition-property: opacity;
		  transition-duration: .25s;
		}

		.fade-enter-active {
		  transition-delay: .25s;
		}

		.fade-enter, .fade-leave-active {
		  opacity: 0
		}
	}
</style>