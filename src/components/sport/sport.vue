<template>
	<div class="page sport-page">
		<iframe ref="iframe"></iframe>
	</div>
</template>

<script>
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';

	export default {
		name: 'sport-page',
		
		data: function () {
			return {
				iframeSrc: ''
			}
		},

		created: function () {
			this.getUrl();
		},

		methods: {
			getUrl: function () {
		    	var that  = this;
		    	var opt   =  {
					url: Config.urls.getGameLaunchUrl,
					data: {
						gamePlatform: 'T188',
						gameType: 'sport'
					}
				};
				
				var callback = function (json) {
					if (json.StatusCode && json.StatusCode != 0) {
						alert(json.Message);
						return;
					}

					that.$refs.iframe.src = json.data;
				};

				Service.get(opt, callback);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sport-page {
		height: auto;
		padding-bottom: 100px;

		iframe {
			height: 1200px;
			width: 1024px;
		}
	}
</style>