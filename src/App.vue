<template>
	<div id="app">
		<my-header></my-header>
		<breaking-news></breaking-news>
		
		<transition name="fade">
		    <keep-alive>
		      	<router-view></router-view>
		    </keep-alive>
		</transition>
		
		<my-footer></my-footer>
		<suspension></suspension>
		<login></login>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import login from './components/login';
	import suspension from './components/suspension';
	import breakingNews from './components/breakingNews';
	import header from './components/header/header';
	import footer from './components/footer';

	export default {
		name: 'app',
		
		mounted: function () {
			this.$store.dispatch('getLoginStatus');
		},

		components: {
			'my-header'    : header,
			'my-footer'    : footer,
			'login'        : login,
			'suspension'   : suspension,
			'breaking-news' : breakingNews
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
		//background-image: url(assets/app-bg.png);
		background-color: #090c2d;
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