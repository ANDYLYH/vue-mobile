<template>
	<div class="searchContent">
		<form action="/">
			<van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="$router.back(-1)" v-focus/>
		</form>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default {
		components:{
			
		},
		data(){
			return {
				msg:'搜索页',
				value:''
			}
		},
		methods:{
			onSearch(){
				console.log('点击搜索');
			},
			onCancel(){
				console.log('点击取消');
			}
		},
		directives: {//自定义指令
			focus: {//获取焦点
				inserted: function(el) {
					el.focus()
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.searchContent{
		width: 100%;
		overflow: hidden;
		span{
			height: 100%;
		}
	}
</style>