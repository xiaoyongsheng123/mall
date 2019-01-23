/*
* @Author: Xiao
* @Date:   2019-01-18 15:51:39
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-18 16:11:51
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

var _tool = require('util/tool.js');
var _payment = require('service/payment-service.js');
var templateIndex = require('./index.string');


// page 逻辑部分
var page = {
	data: {
		orderNumber: _tool.getUrlParam('orderNumber')
	},
	init: function() {
		this.onLoad();
	},
	onLoad: function() {
		this.loadPaymentInfo();
	},
	// 加载订单列表
	loadPaymentInfo: function() {
		var _this = this,
			paymentHtml = '',
			$pageWrap = $('.page-wrap');
		$pageWrap.html('<div class="loading"></div>')
		_payment.getPaymentInfo(this.data.orderNumber, function(res) {
			// 渲染html
			paymentHtml = _tool.renderHtml(templateIndex, res);
			$pageWrap.html(paymentHtml);
			_this.listenOrdeerStatus();
		}, function(errMsg) {
			$pageWrap.html('<p class="err-tip">'+ errMsg +'</p>');
		});
	},
	// 监听订单状态
	listenOrdeerStatus: function() {
		var _this = this;
		this.paymentTimer = window.setInterval(function() {
			_payment.getPaymentStatus(_this.data.orderNumber, function(res) {
				if (res === true) {
					window.location.href = 
					'./result.html?type=payment&orderNumber=' + _this.data.orderNumber
				}	
			});
		}, 5000)
	}
}
$(function() {
	page.init();
})