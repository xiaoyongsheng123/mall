/*
* @Author: Xiao
* @Date:   2019-01-16 11:22:49
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-17 16:46:56
*/
'use strict';
var _tool = require('util/tool.js');

var _address = {
	// 获取地址列表
	getAddressList: function(resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/shipping/list.do'),
			data: {
				pageSize: 50
			},
			success: resolve,
			error: reject
		});
	},
	// 新建地址
	save: function(addressInfo, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/shipping/add.do'),
			data: addressInfo,
			success: resolve,
			error: reject
		});
	},
	// 更新地址
	update: function(addressInfo, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/shipping/update.do'),
			data: addressInfo,
			success: resolve,
			error: reject
		});
	},
	// 删除收件人
	deleteAddress: function(shippingId, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/shipping/del.do'),
			data: {
				shippingId: shippingId
			},
			success: resolve,
			error: reject
		});
	},
	// 获取单条收件人信息
	getAddress: function(shippingId, resolve, reject) {
		_tool.request({
			url: _tool.getServerUrl('/shipping/select.do'),
			data: {
				shippingId: shippingId
			},
			success: resolve,
			error: reject
		});
	}
}

module.exports = _address;