/*
* @Author: Xiao
* @Date:   2019-01-16 10:42:10
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-18 15:25:40
*/
'use strict';
var _tool = require('util/tool.js');

var _order = {
	// 获取商品列表
	getProductList: function(resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/get_order_cart_product.do'),
			success: resolve,
			error: reject
		});
	},
	// 提交订单
	createOrder: function(orderInfo, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/create.do'),
			data: orderInfo,
			success: resolve,
			error: reject
		});
	},
	// 获取订单列表
	getOrderList: function(listParam, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/list.do'),
			data: listParam,
			success: resolve,
			error: reject
		});
	},
	// 获取订单详情
	getOrderDetail: function(orderNumber, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/detail.do'),
			data: {
				orderNo: orderNumber
			},
			success: resolve,
			error: reject
		});
	},
	// 取消订单
	cancelOrder: function(orderNumber, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/cancel.do'),
			data: {
				orderNo: orderNumber
			},
			success: resolve,
			error: reject
		});
	}
}

module.exports = _order;