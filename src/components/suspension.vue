<template>
	<div class="suspension">
		<ul>
			<li>
				<div class="cuboid">客服QQ 87611136</div>
				<div class="icon">HH</div>
			</li>

			<li>
				<div class="cuboid">客服电话 +639158888877</div>
				<div class="icon">HH</div>
			</li>

			<li>
				<div class="cuboid">24小时在线客服</div>
				<div class="icon">HH</div>
			</li>

			<li>
				<div class="cuboid">QQ 12345678</div>
				<div class="icon">HH</div>
			</li>

			<li>
				<div class="cuboid">QQ 12345678</div>
				<div class="icon">HH</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'suspension',
		
		data: function () {
			return {

			}
		},

		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.suspension {
	    position: fixed;
	    top: 30%;
	    right: 0;
	    z-index: 1;

	    ul {
	    	list-style: none;
	    	padding-right: 8px;

	    	li {
	    		height: 40px;
	    		width: 35px;
	    		text-align: center;
	    		margin-bottom: 3px;
	    		position: relative;

	    		.icon {
		    		background-color: #0c1135;
		    		border: 0;
		    		border-radius: 4px;
		    		cursor: pointer;
		    		height: 40px;
		    		line-height: 40px;
		    		width: 35px;
		    		z-index: 100;
		    		position: relative;
	    		}

	    		.cuboid {
	    			background-color: red;
		    		border: 0;
		    		border-radius: 8px;
	    			color: #FFF;
	    			display: inline-block;
		    		height: 40px;
		    		line-height: 40px;
		    		opacity: 0;
		    		width: 0;
		    		position: absolute;
		    		top: 0;
		    		right: 0;
		    		transition: width 0.3s ease-in-out 0.1s;
		    		overflow: hidden;
		    		text-align: left;
	    		}

	    		&:hover {
	    			.cuboid {
	    				opacity: 1;
	    				width: 160px;
	    				padding-left: 10px;
	    			}
	    		}
	    	}
	    }
	}
</style>