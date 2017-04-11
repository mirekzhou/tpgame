<template>
	<div id="app">
		<my-header></my-header>
		
		<transition name="fade">
		    <keep-alive>
		      	<router-view></router-view>
		    </keep-alive>
		</transition>
		
		<!-- <my-footer></my-footer> -->
		<page-naver></page-naver>
	</div>
</template>

<script>
	import header     from './components/header.vue';
	import footer     from './components/footer.vue';
	import pageNaver  from './components/pageNaver.vue';

	export default {
		name: 'app',
		
		components: {
			'my-header'  : header,
			'my-footer'  : footer,
			'page-naver' : pageNaver
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
		overflow-y: hidden;
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