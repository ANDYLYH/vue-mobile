<template>
	 <scroll class="wrapper"
          :data="data"
          :pulldown="pulldown"
          :pullup="pulldown"
          @scrollToEnd="loadData2"
          @pulldown="loadData">
	    <ul class="content">
	      <li v-for="item in data">{{item}}</li>
	    </ul>
	    <div class="loading-wrapper">上拉加载更多</div>
  </scroll>
</template>

<script>
	import scroll from '@/components/scrollView/index.vue'
	import BScroll from 'better-scroll'
	export default {
		components: {
			scroll
		},
		data() {
			return {
				data: [],
				scroll: null,
				pulldown: true
			}
		},
		created(){
			this.loadData()
		},
		mounted() {
			
			
			
		},
		methods: {
			loadData() {
				console.log('下拉刷新系列')
				const self = this;
				self.data = [];
				for(var i = 0; i < 50; i++) {
					self.data.push((i + 7) * Math.random())
				}
			},
			loadData2(){
//				const self = this;
//				for(var i = 0; i < 50; i++) {
//					self.data.push((i + 7) * Math.random())
//				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		background-color: #FFFFFF;
		li{
			height: 40px;
			width: 100%;
			border: 1px solid #E1E1E1;
		}
	}
	.loading-wrapper{
		height: 40px;
		width: 100%;
		text-align: center;
		line-height: 40px;
		z-index: 9999;
	}
</style>