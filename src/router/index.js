import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.use(VueRouter);

import home         from '../components/home/home.vue';
import sport        from '../components/sport/sport.vue';
import live         from '../components/live/live.vue';
import slot         from '../components/slot/slot.vue';
import egaming      from '../components/egaming/egaming.vue';
import lottery      from '../components/lottery/lottery.vue';
import phonebetting from '../components/phonebetting/phonebetting.vue';
import download     from '../components/download/download.vue';

export default new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			component: home
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/sport',
			component: sport
		},
		{
			path: '/live',
			component: live
		},
		{
			path: '/slot',
			component: slot
		},
		{
			path: '/egaming',
			component: egaming
		},
		{
			path: '/lottery',
			component: lottery
		},
		{
			path: '/phonebetting',
			component: phonebetting
		},
		{
			path: '/download',
			component: download
		}
	]
});