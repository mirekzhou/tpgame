<template>
	<div class="header">
		<div class="top-section">
			<div class="p-wrapper top-section-wrapper">
				<img class="header-line" src="../assets/header-line.png">
				<div class="title">伟易博</div>
			</div>
		</div>

		<div class="nav-section">
			<div class="p-wrapper nav-section-wrapper">
				<ul class="pages-section">
					<li><router-link to="/home">首页</router-link></li>
					<li><router-link to="/sport">体育竞技</router-link></li>
					<li><router-link to="/live">真人视讯</router-link></li>
					<li><router-link to="/slot">电子游艺</router-link></li>
					<li><router-link to="/egaming">电子竞技</router-link></li>
					<li><router-link to="/lottery">彩票游戏</router-link></li>
					<li><router-link to="/phonebetting">电话投注</router-link></li>
					<li><router-link to="/download">下载中心</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import '../scss/common.scss';

	export default {
		name: 'header',
		
		data: function () {
			return {
			}
		},

		method: {
		}
	}
</script>

<style lang="scss" scoped>
	$headerTopSectionHeight   :   60px;
	$headerNavSectionHeight   :   60px;

	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;

		.top-section {
			background-color: rgba(30, 25, 50, 1);
			font-size: 22px;
			font-weight: bold;
			height: $headerTopSectionHeight;
			line-height: $headerTopSectionHeight;

			.top-section-wrapper {
				text-align: center;
				position: relative;

				.header-line {
					width: 100%;
					position: absolute;
					top: 1px;
					left: 0;
				}
			}
		}

		.nav-section {
			background-color: rgba(25, 21, 44, 1);
			height: $headerNavSectionHeight;
			line-height: $headerNavSectionHeight;

			.nav-section-wrapper {
				text-align: center;

				.pages-section {
					list-style-type: none;
					height: $headerNavSectionHeight;
					line-height: $headerNavSectionHeight;
					padding: 0;

					li {
						cursor: pointer;
						display: inline-block;

						&:last-child {
							margin-right: 0px;							
						}

						a {
							color: #FFF;
							font: normal normal normal 14px/1.4em georgia,palatino,'book antiqua','palatino linotype',serif;
							text-decoration: none;
							padding: 10px 30px;
						}
					}

					.active {
						a {
							color: #d5d5d5;
						}
					}
				}
			}
		}
	}
</style>