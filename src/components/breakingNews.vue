<template>
	<div class="breaking-news">
		<div class="breaking-news-wrapper">
			<div class="news-icon">
				<span class="latest-news-icon"></span>
			</div>
			<div class="news-info">
				<ul>
					<li v-for="item in items">
						<div class="news">{{item.news}}</div>
						<div class="time">{{item.time}}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'breaking-news',
		
		data: function () {
			return {
				items: [
					{
						news: '尊敬的会员您好：兴业银行由于受到人民银行深圳地区进行系统升级，在2017年5月20日8:00-12:00期间，届时部分银行出入款业务将会受到影响谢谢',
						time: '2017-04-21 05:25:38'
					},
					{
						news: '好消息～抽奖送巴萨门票第三周获奖名单已经公布在官网优惠活动说明中啰！恭喜中奖的会员～',
						time: '2017-04-21 05:25:38'
					}
				]
			}
		},

		methods: {
			
		},

		mounted: function () {
			var a;
			var that = this;

			var st = setInterval(function () {
				a = that.items.shift();
				that.items.push(a);
			}, 3000);
		}
	}
</script>

<style lang="scss" scoped>
	.breaking-news {
		$news-height: 50px;

		background-color: rgba(12, 17, 53, .5);
		box-sizing: border-box;
		position: fixed;
		left: 0;
		top: 120px;
		width: 100%;
		height: $news-height;
		z-index: 2;

		.breaking-news-wrapper {
			display: flex;
			width: 1140px;
			height: $news-height;
			margin: 0 auto;

			.news-icon {
				display: inline-block;
				height: $news-height;
				line-height: $news-height;
				width: 120px;

				.latest-news-icon {
					background-image: url(../assets/common.png);
					background-position: -2px -255px;
					display: inline-block;
					width: 99px;
					height: 24px;
					vertical-align: middle;
					cursor: pointer;
				}
			}

			.news-info {
				display: inline-block;
				flex-grow: 1;
				height: $news-height;
				overflow: hidden;
				font-size: 13px;
				position: relative;

				ul {
					position: absolute;
					transition: all .4s;

					li {
						cursor: pointer;
						height: $news-height;
						line-height: $news-height;
						width: 100%;
						display: flex;

						.news {
							display: inline-block;
							flex-grow: 1;
							padding: 0 20px;
						}

						.time {
							display: inline-block;
							width: 180px;
							padding: 0 10px;
						}
					}
				}
			}
		}
	}
</style>