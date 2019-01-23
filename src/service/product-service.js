/*
* @Author: Xiao
* @Date:   2019-01-07 17:22:42
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-16 10:42:30
*/
'use strict';
var _tool = require('util/tool.js');

var _product = {
	// 获取商品列表
	getProductList: function(listParam, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/product/list.do'),
			data: listParam,
			success: resolve,
			error: reject
		});
	},
	// 获取商品详细信息
	getProductDetail: function(productId, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/product/detail.do'),
			data: {
				productId : productId
			},
			success: resolve,
			error: reject
		});
	},
}

module.exports = _product;