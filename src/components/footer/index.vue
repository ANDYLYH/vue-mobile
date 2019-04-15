<template>
	<section>
		<div class="footer">
			<ul class="navLsit">
				<li class="navItem" data-url="/index" @click="goPage">
					<div class="imgbox">
						<img v-if="active==1"  class="imgs"  src="../../assets/img/ac-home.png" />
						<img v-else class="imgs"  src="../../assets/img/home.png" />
					</div>
					<p class="navlabel">首页</p>
				</li>
				<li class="navItem" data-url="/goodsCategory" @click="goPage">
					<div class="imgbox">
						<img v-if="active==2" class="imgs" src="../../assets/img/ac-list.png" />
						<img v-else class="imgs"  src="../../assets/img/list.png" />
					</div>
					<p class="navlabel">分类</p>
				</li>
				<li class="navItem" data-url="/shoppingCats" @click="goPage">
					<div class="imgbox">
						<img v-if="active==3" class="imgs" src="../../assets/img/ac-cart.png" />
						<img v-else class="imgs" src="../../assets/img/cart.png" />
					</div>
					<p class="navlabel">购物车</p>
				</li>
				<li class="navItem" data-url="/perCenter" @click="goPage">
					<div class="imgbox">
						<img v-if="active==4" class="imgs" src="../../assets/img/ac-my.png" />
						<img v-else class="imgs"  src="../../assets/img/my.png" />
					</div>
					<p class="navlabel">我的</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			active: {
				required: false,
				type: Number
			}

		},
		created(){
//			console.log(this.$route.path.indexOf('index') )
		},
		computed: {},
		filters: {},
		watch: {},
		methods: {
			goPage(e) {//跳转到具体某一页
				this.$router.push({
					path:e.currentTarget.dataset.url
				})
			}

		},

	}
</script>

<style scoped>
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 49px;
		background: #fff;
		box-shadow: 0 -1px 7px -2px #EFEFEF;
		z-index: 999;
	}
	
	.navLsit {
		width: 100%;
		height: 49px;
		display: flex;
	}
	
	.navLsit .navItem {
		position: relative;
		flex: 1;
		text-align: center;
	}
	
	.navLsit .navItem .imgbox {
		height: 26px;
		width: 60px;
		margin: auto;
		text-align: center;
		margin-top: 4px;
	}
	
	.navLsit .navItem .imgbox .imgs {
		width: 26px;
		height: 26px;
	}
	
	.navLsit .navItem .navlabel {
		font-size: 12px;
		color: #333333;
		text-align: center;
	}
</style>