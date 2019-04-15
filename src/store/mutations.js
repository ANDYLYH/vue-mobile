import {
	ADD_CART,
	REDUCE_CART,
	INIT_BUYCART,
	SET_SCROLLTOP,
	DELETE_CART
} from './mutation-types.js'
import {setStore, getStore} from '@/common/utils/mUtils'
export default {
	// 加入购物车
	[ADD_CART](state, dataObj) {
		let cart = state.cartList;
		let cartObj = cart[dataObj.productNo] ? cart[dataObj.productNo] : null;
		if (cartObj) {
			cart[dataObj.productNo]['addShopCartNum']++;
		} else {
			cart[dataObj.productNo] = dataObj;
			cart[dataObj.productNo].addShopCartNum = 1;
		}
		state.cartList = {...cart};
		//存入localStorage
		setStore('buyCart', state.cartList);
	},
	// 移出购物车
	[REDUCE_CART](state, dataObj) {
		let cart = state.cartList;
		let cartObj = cart[dataObj.productNo] ? cart[dataObj.productNo] : null;
		if (cartObj) {
			if(cart[dataObj.productNo].addShopCartNum > 0){
				cart[dataObj.productNo].addShopCartNum -- ;
			}
			//删除对应对象
			if(cart[dataObj.productNo].addShopCartNum == 0){
				delete cart[dataObj.productNo];
			}
			state.cartList = {...cart};
			//存入localStorage
			setStore('buyCart', state.cartList);
		}
		
	},
	[DELETE_CART](state, dataObj) {
		let cart = state.cartList;
		let cartObj = cart[dataObj.productNo] ? cart[dataObj.productNo] : null;
		if (cartObj) {
			delete cart[dataObj.productNo];
			state.cartList = {...cart};
			//存入localStorage
			setStore('buyCart', state.cartList);
		}
		
	},
	[INIT_BUYCART](state) {
		let initCart = getStore('buyCart');
		if (initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	[SET_SCROLLTOP](state,_NUM){
  		state.scrollTop = _NUM;
    }  
}