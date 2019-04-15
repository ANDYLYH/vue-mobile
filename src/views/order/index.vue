<template>
	<div class="content">
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
			<van-list v-model="isLoading" :finished="finished" finished-text="没有更多了" @load="load">
				<van-tabs v-model="active" swipeable :swipe-threshold="5" sticky @change="changeTab">
					<van-tab title="全部">
						<div class="contentMain" style="background-color: red;">全部订单</div>
					</van-tab>
					<van-tab title="待付款">
						<div class="contentMain" style="background-color: gray;">待付款</div>
					</van-tab>
					<van-tab title="待接单">
						<div class="contentMain" style="background-color: green;">待接单</div>
					</van-tab>
					<van-tab title="待发货">
						<div class="contentMain" style="background-color: blue;">待发货</div>
					</van-tab>
					<van-tab title="待收货">
						<div class="contentMain" style="background-color: yellow;">待收货</div>
					</van-tab>
				</van-tabs>
			</van-list>
		</van-pull-refresh>
		<!--<van-tabs v-model="active" swipeable :swipe-threshold="5" sticky @change="changeTab">
			<van-tab title="全部">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<div class="contentMain" style="background-color: red;">全部订单</div>
				</van-pull-refresh>
			</van-tab>
			<van-tab title="待付款">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<div class="contentMain" style="background-color: gray;">待付款</div>
				</van-pull-refresh>
			</van-tab>
			<van-tab title="待接单">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<div class="contentMain" style="background-color: green;">待接单</div>
				</van-pull-refresh>
			</van-tab>
			<van-tab title="待发货">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<div class="contentMain" style="background-color: blue;">待发货</div>
				</van-pull-refresh>
			</van-tab>
			<van-tab title="待收货">
				<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
					<div class="contentMain" style="background-color: yellow;">待收货</div>
				</van-pull-refresh>
			</van-tab>
		</van-tabs>-->

	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				list: [],
				isLoading: false,
				finished: false,
				refreshing: false
			}
		},
		created() {

		},
		methods: {
			changeTab(index, title) {
				console.log(index, title);
				this.active = index;
			},
			onRefresh() {
				const self = this;
				setTimeout(function() {
					self.refreshing = false;
					console.log("刷新完成");
				}, 2000);

			},
			load() {
				const self = this;
				setTimeout(() => {
					for(let i = 0; i < 10; i++) {
						self.list.push(self.list.length + 1);
					}
					// 加载状态结束
					self.isLoading = false;
					console.log("上拉加载更多")
					// 数据全部加载完成
					if(self.list.length >= 40) {
						self.finished = true;
					}
				}, 2000);
			}
		}
	}
</script>

<style lang="scss" scope>
	.content {
		.contentMain {
			width: 100%;
			font-size: 30px;
			color: #FFFFFF;
			height: 2000px;
		}
	}
</style>