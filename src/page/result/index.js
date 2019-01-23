/*
* @Author: Xiao
* @Date:   2018-12-26 16:23:37
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-18 16:33:17
*/
'use strict'

require('./index.css');
require('page/common/nav-simple/index.js');

var _tool = require('util/tool.js');

$(function() {
	var type = _tool.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
	if (type === 'payment') {
		var orderNumber = _tool.getUrlParam('orderNumber'),
			$orderNumber = $element.find('.order-number');
		$orderNumber.attr('href', $orderNumber.attr('href') + orderNumber);
	}
	// 显示对应的提示元素
	$element.show();
})
