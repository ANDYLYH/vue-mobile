<template>
	<div class="categoryContent">

		<!--<form action="/" style="position: relative;top: 0;z-index: 1000;left: 0;right: 0;">
			<van-search v-model="value" placeholder="请输入搜索关键词" readonly @click="goSearchPage" />
		</form>
		<div class="contentMain">
			<ul class="content-list">
				<li class="content-list-item" v-for="item in mGoodsData" @click="seeGoodsDetails">
					<div class="itemBox">
						<div class="item-img">
							<img :src="item.url" />
						</div>
						<div class="item-title">
							<p class="title-head">{{item.productName}}</p>
							<p class="title-subhead">{{item.desc}}</p>
						</div>
						<div class="item-price">
							<p class="price-disco">
								<span class="_price">¥{{item.price}}</span>
							</p>
							<p class="price-sale">¥{{item.sellPrice}}</p>
						</div>
						<div class="item-cart" @click.stop="">
							<buy-cart :productNo="item.productNo" :product="item"></buy-cart>
						</div>
					</div>
				</li>
			</ul>

		</div>-->
		 <scroll class="wrapper"
          :data="mGoodsData"
          :pulldown="pulldown"
          :pullup="pulldown"
          @scrollToEnd="loadData"
          >
          <form action="/" style="position: relative;top: 0;z-index: 1000;left: 0;right: 0;">
			<van-search v-model="value" placeholder="请输入搜索关键词" readonly @click="goSearchPage" />
		</form>
		   <div class="content contentMain">
				<ul class="content-list">
					<li class="content-list-item" v-for="item in mGoodsData" @click="seeGoodsDetails">
						<div class="itemBox">
							<div class="item-img">
								<img :src="item.url" />
							</div>
							<div class="item-title">
								<p class="title-head">{{item.productName}}</p>
								<p class="title-subhead">{{item.desc}}</p>
							</div>
							<div class="item-price">
								<p class="price-disco">
									<span class="_price">¥{{item.price}}</span>
								</p>
								<p class="price-sale">¥{{item.sellPrice}}</p>
							</div>
							<div class="item-cart" @click.stop="">
								<buy-cart :productNo="item.productNo" :product="item"></buy-cart>
							</div>
						</div>
					</li>
				</ul>
	
			</div>
  		</scroll>
		<!--页面底部-->
		<footer-nav :active="2"></footer-nav>
	</div>
</template>

<script>
	import scroll from '@/components/scrollView/index.vue'
	import footerNav from '@/components/footer/index.vue'
	import buyCart from '@/components/common/buyCart.vue'
	import { mapMutations } from 'vuex'
	import goodsData from '../index/goods.js'
	export default {
		components: {
			footerNav,
			buyCart,
			scroll
		},
		data() {
			return {
				mGoodsData:[],
				value:'',
				pulldown:true
			}
		},
		created(){
			this.mGoodsData = goodsData.data.content;
			this.INIT_BUYCART();
		},
		activated() {

		},
		mounted() {

		},
		methods: {
			...mapMutations([
				'INIT_BUYCART'
			]),
			//查看商品详情
			seeGoodsDetails() {
				this.$router.push({
					path: '/goods/details'
				});
			},
			goSearchPage(){
				
			},
			loadData(){
				console.log('上拉加载更多');
				setTimeout(function(){
					const self = this;
					goodsData.data.content.forEach(function(item){
						self.mGoodsData.push(item);
					});
					self.INIT_BUYCART();
				},300)
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.categoryContent {
		/*margin-bottom: 49px;*/
		/*position: relative;
		height: 100vh;
		width: 100vw;*/
		.contentMain {
			width: 100%;
			padding: 0 20px;
			box-sizing: border-box;
			margin-bottom: 50px;
			overflow: hidden;
			background-color: #FFFFFF;
			.content-list {
				width: 100%;
				margin: 1px 0;
				.content-list-item {
					width: 162px;
					float: left;
					.itemBox {
						position: relative;
						width: 100%;
						overflow: hidden;
						margin-bottom: 10px;
						box-sizing: border-box;
						background-color: #FFFFFF;
						box-shadow: 0 0 2px 0 rgba(204, 204, 204, 0.50);
						border-radius: 6px;
						display: block;
						/*图片*/
						.item-img {
							position: relative;
							width: 100%;
							height: 162px;
							border-top-left-radius: 6px;
							border-top-right-radius: 6px;
							background-color: #FFFFFF;
							overflow: hidden;
							border-bottom: 1px solid rgba(242, 242, 242, 1);
							img {
								height: 162px;
								width: 162px;
							}
							.emptyImg {
								position: absolute;
								left: 0;
								top: 0;
								border-top-left-radius: 6px;
								border-top-right-radius: 6px;
							}
							._yushouText {
								position: absolute;
								left: 0;
								bottom: 0;
								height: 24px;
								width: 162px;
								text-align: center;
								line-height: 24px;
								background: linear-gradient(315deg, rgba(252, 70, 78, .6) 0%, rgba(251, 134, 108, .6) 100%);
								color: #FFFFFF;
								font-size: 12px;
							}
						}
						/*标题、副标题*/
						.item-title {
							width: 100%;
							height: 46px;
							overflow: hidden;
							box-sizing: border-box;
							padding: 6px;
							p {
								width: 100%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							.title-head {
								font-size: 14px;
								color: #333333;
							}
							.title-subhead {
								font-size: 11px;
								color: #666666;
							}
						}
						/*价格*/
						.item-price {
							position: relative;
							width: 100%;
							margin-top: 16px;
							margin-bottom: 5px;
							/*overflow: hidden;*/
							padding-left: 6px;
							box-sizing: border-box;
							.price-disco {
								position: absolute;
								top: -14px;
								font-size: 12px;
								color: #999999;
								.costPriceText {
									width: 24px;
									height: 14px;
									background: rgba(252, 70, 78, 1);
									border-radius: 2px;
									font-size: 10px;
									color: #FFFFFF;
									text-align: center;
									line-height: 12px;
									margin-left: 5px;
									padding: 0 3px;
								}
								._price {
									text-decoration: line-through;
								}
							}
							.price-sale {
								font-size: 16px;
								color: #FC464E;
								font-weight: bold;
							}
						}
						/*添加购物车按钮*/
						.item-cart {
							position: absolute;
							height: 30px;
							width: 90px;
							bottom: 7px;
							right: 4px;
							text-align: right;
							.addShoppingCart_btn {
								display: inline-block;
								width: 64px;
								height: 22px;
								border-radius: 4px;
								border: 1px solid rgba(252, 70, 78, 1);
								color: #FC464E;
								font-size: 13px;
								text-align: center;
								line-height: 22px;
								cursor: pointer;
							}
							.addShoppingCart_text {
								color: #FDC42D;
								font-size: 12px;
								font-weight: 600;
							}
							.cart-img {
								height: 30px;
								width: 30px;
							}
							.item-btn-box {
								height: 100%;
								width: 100%;
								line-height: 46px;
								text-align: right;
								.goodsNumCount {
									/*float: left;*/
									display: inline-block;
									min-width: 24px;
									height: 24px;
									line-height: 24px;
									font-size: 14px;
									text-align: center;
									color: #333333;
									position: relative;
									top: -7px;
								}
								.btn-box-img {
									/*float: left;*/
									height: 24px;
									width: 24px;
								}
								.showReduce-enter-active,
								.showReduce-leave-active {
									transition: all .3s ease-out;
								}
								.showReduce-enter,
								.showReduce-leave-active {
									opacity: 0;
									transform: translateX(1rem);
								}
							}
						}
					}
					&:nth-child(2n+1) {
						margin-right: 8px;
					}
				}
			}
		}
	}
</style>