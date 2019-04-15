import Vue from 'vue'
import Router from 'vue-router'
import order from './module/order.js';

//首页
const index = resolve => {
	require.ensure(['@/views/index/index'], () => {
		resolve(require('@/views/index/index'))
	})
}
//分类
const category = resolve => {
	require.ensure(['@/views/category/index'], () => {
		resolve(require('@/views/category/index'))
	})
}
const goodsCategory = resolve => {
	require.ensure(['@/views/goodsCategory/index'], () => {
		resolve(require('@/views/goodsCategory/index'))
	})
}
//购物车
const shoppingCats = resolve => {
	require.ensure(['@/views/shoppingCats/cart'], () => {
		resolve(require('@/views/shoppingCats/cart'))
	})
}
//个人中心
const perCenter = resolve => {
	require.ensure(['@/views/perCenter/index'], () => {
		resolve(require('@/views/perCenter/index'))
	})
}
//搜索页
const search = resolve => {
	require.ensure(['@/components/search/index'], () => {
		resolve(require('@/components/search/index'))
	})
}
//商品详情页
const goodsDetails = resolve => {
	require.ensure(['@/views/goodsDetails/index'], () => {
		resolve(require('@/views/goodsDetails/index'))
	})
}

Vue.use(Router)

export default new Router({
	routes: [
		...order,
		{
			path: '/index',
			name: 'index',
			component: index,
			meta: {
				title: '首页',
				keepAlive: false // 不需要缓存
			}
		},
		{
			path: '/',
			name: 'index',
			component: index,
			meta: {
				title: '首页',
				keepAlive: false // 不需要缓存
			}
		},
		{
			path: '/category',
			name: 'category',
			component: category,
			meta: {
				title: '分类',
				keepAlive: true // 需要缓存
			}
		},
		{
			path: '/goodsCategory',
			name: 'goodsCategory',
			component: goodsCategory,
			meta: {
				title: '商品分类',
				keepAlive: true // 需要缓存
			}
		},
		{
			path: '/shoppingCats',
			name: 'shoppingCats',
			component: shoppingCats,
			meta: {
				title: '购物车',
				keepAlive: false // 不需要缓存
			}
		},
		{
			path: '/perCenter',
			name: 'perCenter',
			component: perCenter,
			meta: {
				title: '个人中心',
				keepAlive: false // 不需要缓存
			}
		},
		{
			path: '/search',
			name: 'search',
			component: search,
			meta: {
				title: '搜索页',
				keepAlive: false // 不需要缓存
			}
		},
		{
			path: '/goods/details',
			name: '/goods/details',
			component: goodsDetails,
			meta: {
				title: '商品详情',
				keepAlive: false // 不需要缓存
			}
		}
	]
})