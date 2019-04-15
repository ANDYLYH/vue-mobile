<template>
	<div class="categoryContent">
		
			<form action="/" style="position: relative;top: 0;z-index: 1000;left: 0;right: 0;">
				<van-search v-model="value" placeholder="请输入搜索关键词" readonly @click="goSearchPage" />
			</form>
			<div class="contentMain">
				<div class="_menu">
					<ul class="_menuList">
						<!--<li class="_menuItem" :class="{active:itemActive == 0}" @click="selectItem(0)">蔬菜</li>-->
						<li v-for="(data,index) in list" class="_menuItem" :class="{active:itemActive == index}" @click="selectItem(index)">{{data.title}}</li>
					</ul>
				</div>
				<div class="_content" ref="box" @scroll="scrollTopFn">
					<!--vant 上拉加载更多-->
					<van-list v-model="loading" :finished="finished" @load="onLoad">
						<div class="categoryItem" name="item" v-for="(data,index) in list">
							<div class="categoryTitle">{{data.title}}</div>
							<div class="categoryList">
								<div class="goodsItem" v-for="item in getArray(data.goodsLength)" @click="seeGoodsDetails">
									<div class="imgbox">
										<!--<img class="goodsimgs" src="" />-->
										<div class="content-list-item-imgEmpty">
											<img src="https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg" />
										</div>
									</div>
									<div class="goodsInfo">
										<p class="goodsname">新鲜的蓝莓</p>
										<div class="otherInfo">
											<div class="price">¥122</div>
											<div class="goodsnum">
												<ul class="numLsit">
													<li class="numItem add">
														<img class="numImg" src="../../assets/img/add1.png" />
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</van-list>
				</div>
			</div>
		<!--页面底部-->
		<footer-nav :active="2"></footer-nav>
	</div>
</template>

<script>
	import footerNav from '@/components/footer/index.vue'
	import {mapMutations} from 'vuex'
	export default {
		components: {
			footerNav
		},
		data() {
			return {
				isLoading:false,
				value: '',
				list: [],
				loading: false,
				finished: false,
				scrollTop: 0,
				itemActive: 0,
				scrollTopArray: [],
				loading: false,
				finished: false,
				list: [{
					title: '蔬菜', //分类名称
					goodsLength: 8 //分类所含商品长度
				}, {
					title: '烧腊',
					goodsLength: 5
				}, {
					title: '海鲜',
					goodsLength: 6
				}, {
					title: '水果',
					goodsLength: 7
				}, {
					title: '抢鲜',
					goodsLength: 10
				}, {
					title: '奶制品',
					goodsLength: 4
				}, {
					title: '肉制品',
					goodsLength: 11
				}, {
					title: '熟食',
					goodsLength: 4
				}, {
					title: '瓜果',
					goodsLength: 6
				}, {
					title: '豆制品',
					goodsLength: 11
				}]
			}
		},
		activated() {
			this.$refs.box.scrollTop = this.$store.state.scrollTop;
		},
		mounted() {
			this.countHeight();
			//滚动事件监控
			window.addEventListener('scroll', this.scrollTopFn);
		},
		methods: {
			...mapMutations([
				'SET_SCROLLTOP'
			]),
			onRefresh(){
				const self = this;
				setTimeout(() => {
			        self.$toast('刷新成功');
			        self.isLoading = false;
			    }, 500);
			},
			getArray(num) {
				return new Array(num)
			},
			//跳到搜索页
			goSearchPage() {
				this.$router.push({
					path: '/search'
				})
			},
			//查看商品详情
			seeGoodsDetails() {
				this.$router.push({
					path: '/goods/details'
				});
			},
			onLoad() {
				console.log('到底加载')
			},
			//计算内容盒子的高度
			countHeight() {
				const self = this;
				//计算高度
				var _dataHeight = 0;
				this.scrollTopArray = [];
				document.getElementsByName('item').forEach(function(item, idx) {
					if(idx == 0) {
						self.scrollTopArray.push(0)
					} else {
						self.scrollTopArray.push(_dataHeight)
					}
					_dataHeight += item.offsetHeight;
				});
			},
			//滚动事件的回调
			scrollTopFn(e) {
				var _scrollTop = this.$refs.box.scrollTop;
				//缓存滚动距离
				this.SET_SCROLLTOP(_scrollTop);
				var _height = -100;
				var index = 0;
				document.getElementsByName('item').forEach(function(item) {
					_height += item.offsetHeight;
					if(_height > _scrollTop) {
						return;
					}
					index++;
				});
				this.itemActive = index;
				if(this.itemActive == this.scrollTopArray.length - 1) {
					this.loading = false;
					this.finished = true;
				}
			},
			//点击选择
			selectItem(index) {
				this.$refs.box.scrollTop = this.scrollTopArray[index] - 10;
			}
		}
	}
</script>

<style scoped lang="scss">
	.categoryContent {
		/*margin-bottom: 49px;*/
		position: relative;
		height: 100vh;
		width: 100vw;
		.contentMain {
			position: absolute;
			right: 0;
			left: 0;
			bottom: 49px;
			top: 88px;
			/*px*/
			background-color: #fff;
			._menu {
				width: 100px;
				height: 100%;
				position: fixed;
				overflow: hidden;
				._menuList {
					width: 80px;
					height: 100%;
					background-color: #f8f8f8;
					overflow-x: hidden;
					._menuItem {
						height: 40px;
						/*border-bottom: 1px solid #E1E1E1;*/
						font-size: 14px;
						color: #666;
						text-align: center;
						line-height: 40px;
						position: relative;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.active {
						background-color: #FFFFFF;
						&::before {
							content: "";
							position: absolute;
							height: 40px;
							width: 3px;
							left: 0;
							top: 0;
							background-color: red;
						}
					}
				}
			}
			._content {
				position: absolute;
				left: 82px;
				right: 0;
				bottom: 0;
				top: 0;
				overflow: auto;
				/*margin-bottom: 49px;*/
				/*overflow-y: scroll;*/
				.categoryItem {
					width: 100%;
					overflow: hidden;
					.categoryTitle {
						width: 100%;
						background-color: #f8f8f8;
						box-sizing: border-box;
						padding: 5px 0 5px 10px;
						font-size: 14px;
						text-align: left;
						border-bottom: 1px dashed #EFEFEF;
						position: relative;
						&:before {
							content: '';
							position: absolute;
							display: block;
							width: 3px;
							height: 14px;
							left: 2px;
							top: 50%;
							margin-top: -7px;
							background-color: #169ADA;
						}
					}
					.categoryList {
						width: 100%;
						/*height: 200px;*/
						overflow: hidden;
						background-color: #FFFFFF;
						.goodsItem {
							width: 100%;
							height: 93px;
							border-bottom: 1px dashed #EFEFEF;
							padding: 10px;
							box-sizing: border-box;
							display: flex;
							.imgbox {
								position: relative;
								flex: 1;
								.goodsimgs {
									width: 70px;
									height: 70px;
								}
								.content-list-item-imgEmpty {
									width: 70px;
									height: 70px;
									position: absolute;
									top: 0;
									left: 0;
									img {
										width: 70px;
										height: 70px;
									}
								}
							}
							.goodsInfo {
								flex: 3;
								box-sizing: border-box;
								padding-left: 10px;
								.goodsname {
									font-size: 14px;
									color: #333;
									line-height: 18px;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
								}
								.otherInfo {
									position: relative;
									padding-top: 14px;
									.price {
										font-size: 18px;
										color: #E70012;
									}
									.goodsnum {
										position: absolute;
										top: 10px;
										right: 10px;
										height: 30px;
										width: 30px;
										.numLsit {
											width: 100%;
											height: 30px;
											display: flex;
											.numItem {
												flex: 1;
												text-align: center;
												line-height: 30px;
												font-size: 14px;
												color: #333;
												.numImg {
													height: 20px;
													width: 20px;
													margin-top: 5px;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>