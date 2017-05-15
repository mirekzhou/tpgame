import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.use(VueRouter);

//下面的这种方式是一次性全部加载
/*import home         from '../components/home/home.vue';
import sport        from '../components/sport/sport.vue';
import live         from '../components/live/live.vue';
import slot         from '../components/slot/slot.vue';
import egaming      from '../components/egaming/egaming.vue';
import lottery      from '../components/lottery/lottery.vue';
import phonebetting from '../components/phonebetting/phonebetting.vue';
import download     from '../components/download/download.vue';*/

export default new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: '/',
			component: function (resolve) {
				require(['../components/home/home.vue'], resolve);
			}
		},
		{
			path: '/home',
			name: 'home',
			component: function (resolve) {
				require(['../components/home/home.vue'], resolve);
			}
		},
		{
			path: '/sport',
			name: 'sport',
			component: function (resolve) {
				require(['../components/sport/sport.vue'], resolve);
			}
		},
		{
			path: '/live',
			name: 'live',
			component: function (resolve) {
				require(['../components/live/live.vue'], resolve);
			}
		},
		{
			path: '/slot',
			name: 'slot',
			component: function (resolve) {
				require(['../components/slot/slot.vue'], resolve);
			}
		},
		{
			path: '/egaming',
			name: 'egaming',
			component: function (resolve) {
				require(['../components/egaming/egaming.vue'], resolve);
			}
		},
		{
			path: '/lottery',
			name: 'lottery',
			component: function (resolve) {
				require(['../components/lottery/lottery.vue'], resolve);
			}
		},
		{
			path: '/phonebetting',
			name: 'phonebetting',
			component: function (resolve) {
				require(['../components/phonebetting/phonebetting.vue'], resolve);
			}
		},
		{
			path: '/download',
			name: 'download',
			component: function (resolve) {
				require(['../components/download/download.vue'], resolve);
			}
		}
	]
});