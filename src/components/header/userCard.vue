<template>
	<div class="user-card" v-bind:style="styleObject">
		<div class="section1">
			<div class="icon-zone">
				<span class="header-icon-crown"></span>
			</div>

			<ul class="user-info">
				<li class="id-zone">
					ID {{userid}}
				</li>

				<li>
					<span class="title">安全评分</span>
					<span class="value">{{safeScores}}分</span>
					<span class="strengthen"><span>提升</span></span>
				</li>

				<li>
					<span class="title">玩家等级</span>
					<span class="value">{{userLevel}}</span>
					<span class="strengthen"><span>提升</span></span>
				</li>
			</ul>
		</div>

		<div class="section2">
			<ul>
				<li>
					<div class="header-icon-zjgl"></div>	
					<div class="title">资金管理</div>
				</li>

				<li>
					<div class="header-icon-tzjl"></div>
					<div class="title">投注记录</div>	
				</li>

				<li>
					<div class="header-icon-czjl"></div>
					<div class="title">充值记录</div>
				</li>

				<li>
					<div class="header-icon-xgmm"></div>
					<div class="title">修改密码</div>		
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'user-card',
		
		props: [
			'styleObject'
		],

		data: function () {
			return {
				userid: '2419',
				safeScores: '20',
				userLevel: '白金VIP'
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.user-card {
		background-color: #252558;
		border: 1px solid #313169;
		position: absolute;
		width: 338px;
		height: 204px;

		.header-icon-crown {
			background-image: url(../../assets/common.png);
			background-position: -5px -308px;
			display: inline-block;
			width: 125px;
			height: 94px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-zjgl {
			background-image: url(../../assets/common.png);
			background-position: -187px -108px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-tzjl {
			background-image: url(../../assets/common.png);
			background-position: -187px -154px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-czjl {
			background-image: url(../../assets/common.png);
			background-position: -187px -201px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.header-icon-xgmm {
			background-image: url(../../assets/common.png);
			background-position: -187px -246px;
			display: inline-block;
			width: 42px;
			height: 42px;
			vertical-align: middle;
			cursor: pointer;
		}

		.section1 {
			height: 122px;
			width: 100%;
			text-align: left;

			.icon-zone {
				display: inline-block;
				width: 150px;
				height: 122px;
				line-height: 122px;
				vertical-align: top;
				text-align: center;
			}

			.user-info {
				display: inline-block;
				width: 180px;
				height: 100%;
				list-style:none;
				vertical-align: top;
				padding-top: 26px;

				li {
					font-size: 12px;
					height: 29px;
					line-height: 29px;
					text-align: left;
					display: flex;

					.title {
						flex: 1;
					}

					.value {
						color: #ffba13;
						display: inline-block;
						flex: 1;
					}

					.strengthen {
						flex: 1;
						text-align: left;

						span {
							cursor: pointer;
							display: inline-block;
							width: 50px;
							height: 20px;
							line-height: 20px;
							border: 1px solid #313169;
							text-align: center;
						}
					}
				}

				.id-zone {
					font-size: 20px;
				}
			}
		}

		.section2 {
			display: inline-block;
			height: 82px;
			width: 100%;

			ul {
				height: 82px;

				li {
					line-height: 30px;
					height: 82px;
					display: inline-block;
					width: 24%;

					.title {
						height: 35px;
						line-height: 35px;
					}
				}
			}
		}
	}
</style>