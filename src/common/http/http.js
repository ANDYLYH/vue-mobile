import axios from 'axios';
import * as api from './api.js';
let httpService = '';
let imHttpService = '';
var currentHost = location.host;

const development = true;
const production = false;
const test = false;
if(development) {
	httpService = 'http://mallapi.qdama.cn'; //测试  
} else if(production) {
	httpService = ''; //生产  
} else {
	httpService = ''; //生产
}

let http = axios.create({
  baseURL: httpService,
	timeout:30000,
});
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

http.interceptors.request.use(function(config) {
  // Do something before request is sent
//	var _accessToken = localStorage.getItem('code')
	let params = {accessToken:''};
  config.params = Object.assign(config.params || {}, params);
  return config;
});

http.interceptors.response.use(function(response) {
  let data = response.data || {};

  if(data.code == '0') {

    return response.data.data || response.data || response;

  } else if(data.code == '10086') {
    return response.data
  } else if(!data.code) {
    return response
  } else {
    let tipMessage = {
      code: data.code,
      message: data.message
    }
    return Promise.reject(tipMessage);
  }

}, function(error) {
	var originalRequest = error.config;
	if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1 && !originalRequest._retry){
		  let tipMessage = {
		    code: '-1',
		    message: '请求超时'
		  }     
	      return Promise.reject(tipMessage)
	} else{
	  let tipMessage = {
	    code: '-1',
	    message: '网络或系统错误'
	  }
	  return Promise.reject(tipMessage);   	
    }
});
export default http;

export {
  api,
  http,
  httpService,
  currentHost,
};
