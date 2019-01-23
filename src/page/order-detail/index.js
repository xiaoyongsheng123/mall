/*
* @Author: Xiao
* @Date:   2019-01-18 11:17:11
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-18 15:28:07
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

var navSide = require('page/common/nav-side/index.js');
var _tool = require('util/tool.js');
var _order = require('service/order-service.js');
var templateIndex = require('./index.string');


// page 逻辑部分
var page = {
	data: {
		orderNumber: _tool.getUrlParam('orderNumber')
	},
	init: function() {
		this.onLoad();
		this.bindEvent();
	},
	onLoad: function() {
		this.loadDetail();
		// 初始化左侧菜单
		navSide.init({
			name: 'order-list'
		});
	},
	bindEvent: function() {
		var _this = this;
		$(document).on('click', '.order-cancel', function() {
			if (window.confirm('确实要取消该订单吗？')) {
				_order.cancelOrder(_this.data.orderNumber, function(res) {
					_tool.successTips('该订单取消成功');
					_this.loadDetail();
				}, function(errMsg) {
					_tool.errorTips(errMsg);
				});
			}
		})
	},
	// 加载订单列表
	loadDetail: function() {
		var _this = this,
			orderDetailHtml = '',
			$content = $('.content');
		$content.html('<div class="loading"></div>')
		_order.getOrderDetail(this.data.orderNumber, function(res) {
			_this.dataFilter(res);
			// 渲染html
			orderDetailHtml = _tool.renderHtml(templateIndex, res);
			$content.html(orderDetailHtml);
		}, function(errMsg) {
			$content.html('<p class="err-tip">'+ errMsg +'</p>');
		});
	},
	// 数据的适配
	dataFilter: function(data) {
		data.needPay = data.status == 10;
		data.isCancelable = data.status ==10;
	}
}
$(function() {
	page.init();
})