/*
* @Author: Xiao
* @Date:   2019-01-18 16:05:16
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-18 16:12:30
*/
'use strict';
var _tool = require('util/tool.js');

var _payment = {
	// 获取商品列表
	getPaymentInfo: function(orderNumber, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/pay.do'),
			data: {
				orderNo: orderNumber
			},
			success: resolve,
			error: reject
		});
	},
	// 获取订单状态
	getPaymentStatus: function(orderNumber, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/order/query_order_pay_status.do'),
			data: {
				orderNo: orderNumber
			},
			success: resolve,
			error: reject
		});
	}
}

module.exports = _payment;