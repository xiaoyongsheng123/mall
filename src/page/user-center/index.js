/*
* @Author: Xiao
* @Date:   2018-12-28 09:07:34
* @Last Modified by:   Xiao
* @Last Modified time: 2018-12-28 10:19:12
*/
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');

var navSide = require('page/common/nav-side/index.js');
var _tool = require('util/tool.js');
var _user = require('service/user-service.js');
var templateIndex = require('./index.string');


// page 逻辑部分
var page = {
	init: function() {
		this.onLoad();
	},
	onLoad: function() {
		// 初始化左侧菜单
		navSide.init({
			name: 'user-center'
		});
		// 加载用户信息
		this.loadUserInfo();
	},
	loadUserInfo: function() {
		var userHtml = '';
		_user.getUserInfo(function(res) {
			userHtml = _tool.renderHtml(templateIndex, res);
			$('.panel-body').html(userHtml);
		}, function(errMsg) {
			_tool.errorTips(errMsg);
		})
	}
}
$(function() {
	page.init();
})