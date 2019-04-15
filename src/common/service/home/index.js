import {http, api,httpService} from '@/common/http/index.js';
import  qs from 'qs';

//模板信息
export const queryWebModel = (params = {}) => {
  return http.post(api.queryWebModel,qs.stringify(params));
}

//加入购物车
export const onsaleQuery = (params = {}) => {
	return http.get('https://slab.backend.soushi88.com/onsale/query',qs.stringify(params),{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
    }
 });
}
////通过商品编号 获取商品详情
//export const getproductDetail = (params = {}) => {
//	return requstPost(api.getproductDetail, params);
//}
