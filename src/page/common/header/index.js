/*
* @Author: Xiao
* @Date:   2018-12-25 16:41:59
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-07 17:30:51
*/
'use strict'
require('./index.css');
var _tool = require('util/tool.js');

// 通用页面头部
var header = {
	init: function() {
		this.onLoad();
		this.bindEvent();
	},
	onLoad: function() {
		var keyword = _tool.getUrlParam('keyword');
		// keyword存在，回填输入框
		if (keyword) {
			$('#search-input').val(keyword);
		};
	},
	bindEvent: function() {
		var _this = this;
		// 点击搜索按钮，做搜索提交
		$('#search-btn').click(function() {
			_this.searchSubmit();
		})
		// 输入回车后，做搜索提交
		$('#search-input').keyup(function(e) {
			if (e.keyCode === 13) {
				_this.searchSubmit();
			}
		})
	},
	// 搜索的提交
	searchSubmit: function() {
		var keyword = $.trim($('#search-input').val());
		// 如果提交的时候有keyword,正常跳转到list页
		if (keyword) {
			window.location.href = './list.html?keyword=' + keyword;
		}
		// 如果keyword为空，直接返回首页
		else {
			_tool.goHome();
		}
	}
};

header.init();