<template>
	<transition >
		<div class="myConfirm" @click.stop="">
			<div class="dialog__mask" @tap="cancelFn"></div>
			<div class="myConfirm-content">
				<div class="myConfirm-content-text">
					<p class="_text" >{{msg || "标题内容"}}</p>
				</div>
				<div class="myConfirm-content-footer">
					<span class="cancelBtn" @click.stop="cancelFn">取消</span>
					<span class="confirmBtn" @click.stop="confirmFn">确定</span>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ['msg'], // align ： center ：left  2 ：center
		onReady() {
			
		},
		onShow() {

		},
		methods: {
			cancelFn(){
				this.$emit('close');
			},
			confirmFn(){
				this.$emit('confirm');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
	.myConfirm {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 9991;
		.dialog__mask {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom:0;
			z-index: 99;
			background: rgba(0, 0, 0, 0.35);
		}
		.myConfirm-content {
			position: absolute;
			height: 162px;
			width: 291px;
			left: 50%;
			margin-left: -145px;
			background-color: #FFFFFF;
			top: 50%;
			margin-top: -81px;
			box-shadow: 3 -1px 7px -2px #EFEFEF;
			/*transform: translateY(0px);*/
			animation: tipMove .4s ;
			z-index: 999;
			border-radius: 12px;
			.myConfirm-content-text{
				text-align: center;
				width: 100%;
				overflow: hidden;
				._text{
					width: 257px;
					font-size: 16px;
					color: #333333;
					margin: 0 auto;
					margin-top: 45px;
					text-align: center;
				}
			}
			.myConfirm-content-footer{
				position: absolute;
				bottom: 0;
				height: 46px;
				width: 100%;
				border-top: 1px solid #F2F2F2;
				text-align: center;
				line-height: 46px;
				font-size: 16px;
				display: flex;
				span{
					flex: 1;
					font-size: 16px;
					color: #A5A5A5;
				}
				.cancelBtn{
					border-right: 1px solid #F2F2F2;
				}
				.confirmBtn{
					color: #FF5E5F;
				}
			}
		}
	}
	
	.myConfirm_b {
		bottom: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all 2s ease;
	}
	
	.fade-enter,
	.fade-leave-to {
		transform: translate3d(0, 100%, 0);
		opacity: 0;
	}
</style>