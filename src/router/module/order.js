//全部订单
const allOrder = resolve => {
	require.ensure(['@/views/order/index'], () => {
		resolve(require('@/views/order/index'))
	})
}
export default [
	{
		path: '/allOrder',
		name: 'allOrder',
		component: allOrder,
		meta: {
			requiresAuth: true,
			title:'全部订单'
		}
	}
];