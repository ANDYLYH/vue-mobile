<template>
	<div>
		<div class="shoppingCart-empty" v-if="productsContent.length == 0 ">
			<div class="empty-img">
				<img src="../../../static/img/cart/cartEmpty@2x.png" />
			</div>
			<div class="empty-text">
				购物车空空如也，快去逛逛吧~
			</div>
		</div>
		<div class="goodsList " v-if="productsContent.length > 0 ">
			<ul class="goodsList-ul">
				<li class="goodsList-li" v-for="(item,index) in productsContent" :key="index">
					<div class="li-info" @touchstart="touchS" @touchmove="touchM" @touchend="touchE(index)" :class="{'moveLeft':item.leftNum < 0}">
						<div class="li-info-checked" @click="selectGoods(index)">
							<img :src="(item.check == 1 ? '../../../static/img/cart/check@2x.png' : '../../../static/img/cart/notcheck@2x.png')" />
						</div>
						<div class="li-info-img">
							<img :src="item.url" />
						</div>
						<div class="li-info-msg">
							<p class="_title">{{item.productName}}</p>
							<p class="_price">
								<span class="_main">¥{{item.sellPrice}}</span>
								<span class="_disco">¥{{item.sellPrice < item.price ? item.price : item.costPrice}}</span>
							</p>
						</div>
						<div class="item-btn">
							<div class="item-btn-box">
								<img class="btn-box-img" src="../../../static/img/cart/sub@2x.png" @click.stop="subtractCart(item)" />
								<span class="goodsNumCount">{{item.addShopCartNum}}</span>
								<img class="btn-box-img" src="../../../static/img/cart/add@2x.png" @click.stop="addCart(item)" />
							</div>
						</div>
					</div>
					<div class="li-per">
						<div class="oper-delete" @click="deleteCartGoods(item)">删除</div>
					</div>
				</li>

			</ul>
			<div class="content-line"></div>
		</div>
		<div class="shoppingCart-footer">
			<div class="footer-item footer-left">
				<div class="left-item1" @click="selectAllGoods">
					<img :src="(selectAllGoodsFlag ? '../../static/img/cart/check@2x.png' : '../../static/img/cart/notcheck@2x.png')" />
					<!--<img src="../../static/img/cart/check@2x.png" />-->
					<span class="_text">全选</span>
				</div>
				<div class="left-item2" style="line-height: 16px;margin-top: 7px;" v-if="orderTotalReduce > 0">
					<span class="_price">合计：¥{{orderAmountAll || '0.00'}}</span>
					<span class="disc_price">全额：¥{{orderAmount}}&nbsp;&nbsp;&nbsp;立减：¥{{orderTotalReduce}}</span>
				</div>
				<div class="left-item2" v-else>
					<span class="_price">合计：¥{{orderAmount}}</span>
				</div>
			</div>
			<div class="footer-item footer-right" v-if="orderAmount == 0">去结算</div>
			<div class="footer-item footer-right active" v-if="orderAmount > 0" @click="confirmAddToBalance">去结算({{totalNum}})</div>
		</div>
		<!--confirm弹窗-->
		<my-confirm v-if="confirmOption.myConfirmFlag" :msg="confirmOption.title" @confirm="confirmOption.success" @close="confirmOption.myConfirmFlag = false"></my-confirm>
		<footer-nav :active="3"></footer-nav>
	</div>
</template>

<script>
	import myConfirm from '@/components/common/comfirmPage.vue'
	import footerNav from '@/components/footer/index.vue'
	import goodsData from '../index/goods.js'
	import { mapState, mapMutations } from 'vuex'
	export default {
		components: {
			footerNav,
			myConfirm
		},
		data() {
			return {
				productsContent: [],
				startX: 0,
				endX: 0,
				confirmOption: {
					myConfirmFlag: false,
					title: '',
					success: ''
				},
				orderAmountAll:0,
				orderAmount:0,
				orderTotalReduce:0,
				totalNum:0,
				selectAllGoodsFlag:false
			};
		},
		created() {
			this.INIT_BUYCART();
			//购物车初始化
			this.shopingCartInit();
		},
		computed: {
			...mapState([
				'cartList'
			]),
			shopCart: function() {
				return Object.assign({}, this.cartList);
			},
		},
		mounted() {

		},
		methods: {
			...mapMutations([
				'INIT_BUYCART', 'REDUCE_CART', 'ADD_CART', 'DELETE_CART'
			]),
			deleteCartGoods(data) {
				this.DELETE_CART(data);
				this.shopingCartInit();
			},
			confirmAddToBalance(){
				
			},
			selectAllGoods(){
				const self = this;
				if(this.selectAllGoodsFlag){
					this.selectAllGoodsFlag = false;
				}else{
					this.selectAllGoodsFlag = true;
				}
				var _arr = this.productsContent;
				_arr.forEach(function(item){
					item.check = self.selectAllGoodsFlag ? 1 : 0;
				})
				this.$set(this.productsContent, _arr);
			},
			selectGoods(idx){
				var _arr = this.productsContent;
				var _flag = true;
				_arr[idx].check = this.productsContent[idx].check ? 0 : 1;
				this.$set(this.productsContent, idx, _arr[idx]);
				this.productsContent.forEach(function(item){
					if(item.check == 0){
						_flag = false
					}
				})
				if(_flag){
					this.selectAllGoodsFlag = true;
				}else{
					this.selectAllGoodsFlag = false;
				}
			},
			shopingCartInit() {
				this.INIT_BUYCART();
				this.productsContent = [];
				for(var key in this.shopCart) {
					var _obj = this.shopCart[key];
					_obj.check = _obj.check ? _obj.check : 0;
					_obj.leftNum = 0;
					this.productsContent.push(_obj)
				}
			},
			//滑动交互
			touchS(e) { // touchstart
				this.startX = e.touches[0].clientX;
				this.endX = e.touches[0].clientX;
			},
			touchM(e) { // touchmove
				this.endX = e.touches[0].clientX;
			},
			touchE(index) { // touchend
				this.resetLeftNum();
				var _arr = this.productsContent;
				if((this.startX - this.endX) > 30) {
					_arr[index].leftNum = -60
					this.$set(this.productsContent, index, _arr[index])
				} else {
					_arr[index].leftNum = 0
					this.$set(this.productsContent, index, _arr[index])
				}
			},
			resetLeftNum() {
				this.productsContent.forEach(function(item, index) {
					item.leftNum = 0;
				})
			},
			//移出购物车
			subtractCart(data) {
				if(data.addShopCartNum == 1) {
					this.confirmOption = {
						myConfirmFlag: true,
						title: '确认要删除该商品吗？',
						success: this.confirmDeleteCommon,
						content: data
					}
					return false;
				}
				this.REDUCE_CART(data);
			},
			confirmDeleteCommon() {
				this.REDUCE_CART(this.confirmOption.content);
				this.shopingCartInit();
				this.confirmOption.myConfirmFlag = false;
			},
			//加入购物车
			addCart(data) {
				this.ADD_CART(data);
			}
		}
	};
</script>

<style lang="scss" scoped>
	/*购物车底部*/
	
	.shoppingCart-footer {
		z-index: 999;
		height: 46px;
		width: 100%;
		position: fixed;
		bottom: 49px;
		background-color: #FFFFFF;
		border-top: 1px solid #F2F2F2;
		display: flex;
		.footer-left {
			flex: 1;
			.left-item1 {
				float: left;
				/*line-height: 46px;*/
				margin-top: 8px;
				margin-left: 12px;
				img {
					position: relative;
					top: 4px;
					height: 18px;
					width: 18px;
				}
				._text {
					font-size: 14px;
					color: #666666;
					margin-left: 5px;
				}
			}
			.left-item2 {
				margin-left: 10px;
				float: left;
				line-height: 46px;
				text-align: right;
				font-size: 14px;
				span {
					display: block;
					text-align: left;
				}
				._price {
					color: #FC464E;
					font-weight: bold;
				}
				.disc_price {
					font-size: 12px;
					color: #333333;
				}
			}
		}
		.footer-right {
			width: 110px;
			height: 46px;
			font-size: 16px;
			text-align: center;
			line-height: 46px;
			background-color: #E1E1E1;
			&.active {
				background-image: linear-gradient(45deg, #FB866C 0%, #FC464E 100%);
				color: #FFFFFF;
			}
		}
	}
	
	.shoppingCart-empty {
		width: 100%;
		height: calc(100vh - 96px);
		margin-top: 8px;
		background-color: #FFFFFF;
		.empty-img {
			height: 75px;
			width: 86px;
			margin: 0 auto;
			padding-top: 167px;
			img {
				height: 75px;
				width: 86px;
			}
		}
		.empty-text {
			text-align: center;
			font-size: 12px;
			color: #333333;
			margin-top: 15px;
		}
	}
	
	.goodsList {
		width: 100%;
		min-height: calc(100vh - 95px);
		margin-bottom: 95px;
		background-color: #F2F2F2;
		.discountCoupon-item {
			width: 100%;
			height: 40px;
			background-color: #FFFFFF;
			border-bottom: 1px solid #F2F2F2;
			&:last-child {
				border-bottom: 0;
			}
			.item-img {
				width: 78px;
				height: 40px;
				text-align: center;
				/*line-height: 40px;*/
				float: left;
				img {
					width: 60px;
					height: 20px;
					position: relative;
					top: 3px;
				}
				.img_label {
					display: inline-block;
					height: 20px;
					width: 60px;
					font-size: 13px;
					color: #FC464E;
					border: 1px solid #FC464E;
					text-align: center;
					line-height: 20px;
					border-radius: 5px;
					margin-top: 9px;
				}
			}
			.item-msg {
				width: 209px;
				height: 40px;
				float: left;
				._text {
					line-height: 40px;
					font-size: 12px;
					color: #333333;
					/*word-break: break-all;
							text-overflow: ellipsis;
							display: -webkit-box; 
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;*/
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			.item-icon {
				height: 40px;
				line-height: 34px;
				float: right;
				._text {
					font-size: 12px;
					color: #FC464E;
				}
				img {
					height: 10px;
					width: 10px;
					margin-right: 11px;
					margin-left: 3px;
				}
			}
		}
		.goodsList-ul {
			width: 100%;
			overflow: hidden;
			.goodsList-li {
				position: relative;
				width: 100%;
				overflow: hidden;
				min-height: 90px;
				.currentSales {
					position: relative;
					height: 120px;
					width: 100%;
					.currentSales-item {
						position: absolute;
						bottom: 0;
						height: 30px;
						width: 100%;
						background-color: #FFFFFF;
						border-bottom: 1px solid #F2F2F2;
						.changeActivity {
							display: inline-block;
							float: right;
							height: 32px;
							width: 40px;
							line-height: 31px;
							font-size: 12px;
							color: #333333;
							text-align: right;
							margin-right: 12px;
							font-weight: bold;
						}
						.currentSales_text {
							float: left;
							width: 260px;
							height: 32px;
							font-size: 10px;
							color: #666666;
							line-height: 32px;
							margin-left: 31px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							.currentSales_icon {
								display: inline-block;
								height: 14px;
								width: 26px;
								color: #FC464E;
								border: 1px solid #FC464E;
								line-height: 14px;
								font-size: 10px;
								text-align: center;
								margin-right: 7px;
							}
						}
					}
				}
				.li-info,
				.li-per {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 90px;
					box-sizing: border-box;
				}
				.li-info {
					display: flex;
					z-index: 2;
					background: #FFFFFF;
					padding: 10px 0;
					transition: left 0.2s ease-in-out;
					border-bottom: 1px solid rgba(239, 239, 239, .48);
					&.moveLeft {
						left: -60px;
					}
					.li-info-img {
						position: relative;
						background-color: rgba(51, 51, 51, .4);
						height: 70px;
						width: 70px;
						img {
							height: 70px;
							width: 70px;
						}
					}
					.li-info-msg {
						position: relative;
						flex: 1;
						p {
							margin-left: 10px;
						}
						._title {
							width: 190px;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							font-size: 14px;
							color: #333333;
						}
						._price {
							position: absolute;
							font-weight: bold;
							font-size: 16px;
							color: #FC464E;
							bottom: 0;
							left: 0;
							._disco {
								display: block;
								font-size: 12px;
								color: #999999;
								text-decoration: line-through;
							}
						}
						.no_goods {
							color: #939393;
							font-size: 14px;
							margin-top: 30px;
						}
					}
					.item-btn {
						height: 22px;
						width: 100px;
						position: absolute;
						right: 16px;
						bottom: 10px;
						text-align: right;
						.item-btn-tips {
							position: absolute;
							top: -23px;
							font-size: 12px;
							color: #FF5E5F;
							left: 20px;
						}
						.item-btn-box {
							height: 100%;
							width: 100%;
							.goodsNumCount {
								display: inline-block;
								min-width: 36px;
								height: 24px;
								line-height: 24px;
								font-size: 14px;
								text-align: center;
								color: #333333;
								position: relative;
								top: -7px;
							}
							.btn-box-img {
								height: 24px;
								width: 24px;
							}
						}
					}
					.li-info-checked {
						position: relative;
						height: 70px;
						width: 34px;
						line-height: 70px;
						text-align: center;
						img {
							height: 18px;
							width: 18px;
						}
					}
				}
				.li-per {
					display: flex;
					justify-content: flex-end;
				}
				.oper-delete {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 60px;
					z-index: 1;
					color: #FFFFFF;
					background: linear-gradient(135deg, rgba(231, 0, 18, 1) 0%, rgba(250, 126, 49, 1) 100%);
					font-size: 14px;
				}
			}
		}
	}
</style>