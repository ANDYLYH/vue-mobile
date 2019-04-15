const _enum = {
	//付款方式
	payTypeOptions: [{
			value: 0,
			label: '未支付'
		},
		{
			value: 1,
			label: '微信支付'
		},
		{
			value: 2,
			label: '支付宝支付'
		}
	],
	//物流方式
	expressTypeOptions: [{
			value: '',
			label: '全部'
		}, {
			value: 0,
			label: '快递'
		},
		{
			value: 1,
			label: '自提'
		},
		{
			value: 3,
			label: '美团'
		},
		{
			value: 2,
			label: '同城配送'
		},
		{
			value: 9,
			label: '其他'
		}
	],
	expressType: [{
			value: '',
			label: '全部'
		},
		{
			value: 2,
			label: '同城配送'
		},
		{
			value: 1,
			label: '到店自提'
		},
//		{
//			value: 3,
//			label: '美团配送'
//		}
	],
	expressTypeArray: ['', '到店自提', '同城配送'],
	//配送状态
	deliveryStatus: [{
			value: '',
			label: '全部'
		}, {
			value: '3',
			label: '待自提'
		},
		{
			value: '4',
			label: '已提货'
		},
		{
			value: '5',
			label: '待接单'
		},
		{
			value: '6',
			label: '已接单'
		},
		{
			value: '7',
			label: '已取货'
		},
		{
			value: '8',
			label: '已送达'
		},
		{
			value: '9',
			label: '退款取消'
		},
		{
			value: '10',
			label: '客服取消'
		},
		{
			value: '11',
			label: '骑手取消'
		},
		{
			value: '12',
			label: '配送异常'
		},
		{
			value: '14',
			label: '超时送达'
		}
	],
	//订单状态
	orderStatusOptions: [{
			value: 'WAIT_BUYER_PAY',
			label: '待付款'
		},
		{
			value: 'WAIT_CONFIRM',
			label: '待确认'
		},
		{
			value: 'WAIT_SELLER_SEND_GOODS',
			label: '待发货'
		},
		{
			value: 'WAIT_BUYER_CONFIRM_GOODS',
			label: '已发货'
		},
		{
			value: 'TRADE_SUCCESS',
			label: '已完成'
		},
		{
			value: 'TRADE_CLOSED',
			label: '已关闭'
		},
	],
	orderStatusStr: {
		'WAIT_BUYER_PAY': '代付款',
		'WAIT_CONFIRM': '待确认',
		'WAIT_SELLER_SEND_GOODS': '待发货',
		'WAIT_BUYER_CONFIRM_GOODS': '已发货',
		'TRADE_SUCCESS': '已完成',
		'TRADE_CLOSED': '已关闭',
	},
	//退款
	onlyFeeOptions: [{
			value: '',
			label: '全部'
		},
		{
			value: '0',
			label: '仅退款'
		},
		{
			value: '1',
			label: '退款退货'
		}
	],
	//订单来源
	sourceOptions: [{
			value: '',
			label: '全部'
		},
		{
			value: '1',
			label: '有赞'
		},
		{
			value: '4',
			label: '美团'
		}
	],
	//订单渠道
	channelOptions: [{
			value: '0',
			label: '中台'
		},
		{
			value: '1',
			label: '有赞'
		},
		{
			value: '2',
			label: '小程序'
		},
		{
			value: '3',
			label: '非码'
		},
		{
			value: '4',
			label: '美团'
		}
	],
	//订单类型
	orderType: [{
			value: '',
			label: '全部'
		},
		{
			value: '0',
			label: '普通订单'
		},
		{
			value: '1',
			label: '拼团订单'
		},
		{
			value: '2',
			label: '预售订单'
		}
	],
	//配送类型
	deliveryType: [{
			value: '',
			label: '全部'
		},
		{
			value: '0',
			label: '自家配送'
		},
		{
			value: '1',
			label: '美团配送'
		},
		{
			value: '2',
			label: '点我达配送'
		},
		{
			value: '3',
			label: '上门自提'
		}
	],
	//分拣状态
	sortStatus: [{
			value: '',
			label: '全部'
		},
		{
			value: '0',
			label: '待分拣'
		},
		{
			value: '1',
			label: '分拣中'
		},
		{
			value: '2',
			label: '分拣完成'
		}
	],
	sortStatusStr: [
		'待分拣',
		'分拣中',
		'分拣完成'
	],
	refundStatusStr:['','退款中','退款完成']
}
export default _enum;