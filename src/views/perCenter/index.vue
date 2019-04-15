<template>
	<div class="main-content">
		<div class="content-head">
			<img class="bg-img" src="../../static/img/percenter/me_background.png" />
			<div class="userInfo-content">
				<div class="userImg">
					<img src="../../../static/img/percenter/login_wechat@2x.png" />
				</div>
				<p class="username">
					andy
				</p>
				<p class="userPhone">
					18278300112
				</p>
			</div>
			<div class="content-myOrder">
				<div class="myOrder-title">
					<span class="_label">我的订单</span>
					<span class="_text" @click="seeOrder(1)">查看全部订单<img src="../../static/img/percenter/me_allorder@2x.png"/></span>
				</div>
				<ul class="myOrder-btnList">
					<li class="btnList-item" @click="seeOrder(2)">
						<div class="btnList-item-img">
							<img src="../../static/img/percenter/me_daifukuan@2x.png" />
							<!--<span class="_icon" v-if="WAIT_BUYER_PAY >0 ">{{WAIT_BUYER_PAY}}</span>-->
						</div>
						<span class="_labelText">待付款</span>
					</li>
					<li class="btnList-item" @click="seeOrder(3)">
						<div class="btnList-item-img">
							<img src="../../static/img/percenter/me_daifahuo@2x.png" />
							<!--<span class="_icon" v-if="WAIT_SELLER_SEND_GOODS >0 ">{{WAIT_SELLER_SEND_GOODS}}</span>-->
						</div>
						<span class="_labelText">待发货</span>
					</li>
					<li class="btnList-item" @click="seeOrder(4)">
						<div class="btnList-item-img">
							<img src="../../static/img/percenter/me_daishouhuo@2x.png" />
							<!--<span class="_icon" v-if="WAIT_BUYER_CONFIRM_GOODS >0 ">{{WAIT_BUYER_CONFIRM_GOODS}}</span>-->
						</div>
						<span class="_labelText">待收货</span>
						
					</li>
					<li class="btnList-item" @click="seeAfterSale">
						<div class="btnList-item-img">
							<img src="../../static/img/percenter/me_aftersales@2x.png" />
							<!--<span class="_icon">10</span>-->
						</div>
						<span class="_labelText">售后服务</span>
						
					</li>
				</ul>
			</div>
		</div>

		<div class="content-otherMsg">
			<ul class="otherMsg-btnList">
				<li class="btnList-item otherSet" @click="myDiscount">
					<img src="../../static/img/percenter/me_discount@2x.png" />
					<span class="_labelText">我的优惠劵</span>
				</li>
				<li class="btnList-item otherSet" @click="myAddress">
					<img src="../../static/img/percenter/me_address@2x.png" />
					<span class="_labelText">我的收货地址</span>
				</li>
				<li class="btnList-item otherSet">
					<img src="../../static/img/percenter/me_service@2x.png" />
					<span class="_labelText">联系客服</span>
				</li>
				<li class="btnList-item otherSet" @click="mySetting">
					<img src="../../static/img/percenter/me_setting@2x.png" />
					<span class="_labelText">设置</span>
				</li>
			</ul>
		</div>
		<footer-nav :active="4"></footer-nav>
	</div>

</template>

<script>
	import footerNav from '@/components/footer/index.vue'
	export default {
		data() {
			return {
				userInfo:{phone:''},
				WAIT_BUYER_CONFIRM_GOODS:0,
				WAIT_BUYER_PAY:0,
				WAIT_SELLER_SEND_GOODS:0
			}
		},
		components: {
			footerNav
		},
		onShow(){},
		onReady() {
			//购物车查询
			
		},
		methods: {
			orderStastics(){
				
			},
			myDiscount(){
				
			},
			myAddress(){
				
			},
			mySetting(){
				
			},
			myService(){
				
			},
			seeOrder(status){
				
			},
			seeAfterSale(){
				
			}
		},

		mounted() {},

	}
</script>

<style lang="scss" scoped>
	.main-content {
		background: #F2F2F2;
		height: 100vh;
		.content-head {
			position: relative;
			height: 250px;
			width: 100%;
			background-color: #F2F2F2;
			.bg-img {
				height: 155px;
				width: 100%;
			}
			.userInfo-content{
				position: absolute;
				top: 20px;
				left: 50%;
				margin-left: -60px;
				width: 120px;
				height: 90px;
				text-align: center;
				color: #FFFFFF;
				.userImg {
					margin: 0 auto;
					height: 50px;
					width: 50px;
					border-radius: 100px;
					overflow: hidden;
					box-sizing: border-box;
					background: #fff;
					img{
						height: 50px;
						width: 50px;
					}
				}
				.username{
					margin-top: 4px;
					text-align: center;
					font-size: 14px;
				}
				.userPhone{
					text-align: center;
					font-size: 14px;
				}
			}
			.content-myOrder {
				position: absolute;
				top: 115px;
				left: 50%;
				margin-left: -175px;
				height: 128px;
				width: 351px;
				background: #FFFFFF;
				box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
				border-radius: 10px;
				.myOrder-title{
					height: 42px;
					width: 100%;
					line-height: 42px;
					border-bottom: 1px solid rgba(222,222,222,0.50);
					._label{
						font-size: 16px;
						color: #333333;
						font-weight: bold;
						margin-left: 10px;
					}
					._text{
						float: right;
						font-size: 12px;
						margin-right: 10px;
						img{
							height: 10px;
							width: 6px;
							margin-left: 3px;
						}
					}
				}
			}
			.myOrder-btnList{
				margin-top: 16px;
				display: flex;
				.btnList-item{
					position: relative;
					flex: 1;
					align-items: center;
					text-align: center;
					.btnList-item-img{
						position: relative;
						display: inline-block;
						height: 32px;
						width: 32px;
					}
					
					img{
						height: 32px;
						width: 32px;
					}
					
					._labelText{
						display: block;
						text-align: center;
						font-size: 12px;
						color: #333333;
					}
					._icon {
							position: absolute;
							top: -8px;
							right: -7px;
							min-width: 14px;
							height: 14px;
							border-radius: 100%;
							background-color: #FC464E;
							font-size: 10px;
							text-align: center;
							line-height: 14px;
							padding: 2px;
							color: #FFFFFF;
						}
					
				}
				
			}
		}
		.content-otherMsg {
			position: relative;
			min-height: 85px;
			width: 351px;
			background: #FFFFFF;
			box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
			border-radius: 10px;
			margin: 0 auto;
			margin-top: 5px;
			.otherMsg-btnList{
				display: flex;
				flex-wrap: wrap;
				padding-bottom: 16px;
				.btnList-item{
					position: relative;
					width: 100px;
					margin-top: 16px;
					text-align: center;
					margin-right: 25px;
					&:nth-child(3n){
						margin-right: 0;
					}
					img{
						height: 32px;
						width: 32px;
					}
					._labelText{
						display: block;
						text-align: center;
						font-size: 12px;
						color: #333333;
					}
					.mServicer{
						height: 32px;
						width: 32px;
						background-color: #FFFFFF;
						line-height: none;
						margin-bottom: 5px;
						padding: 0;
						&::after{
							border: none;
						}
						img{
							height: 32px;
							width: 32px;
						}
					}
				}
			}
		}
	}</style>