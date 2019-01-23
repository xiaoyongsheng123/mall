/*
* @Author: Xiao
* @Date:   2018-12-24 09:50:33
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-07 17:17:24
*/
 
'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var navSide = require('page/common/nav-side/index.js');
var templateBanner = require('./banner.string')
var _tool = require('util/tool.js');

$(function() {
	// 渲染banner的html
	var bannerHtml = _tool.renderHtml(templateBanner);
	$('.banner-con').html(bannerHtml);
	// 初始化banner
    var $slider = $('.banner').unslider({
    	dots: true
    });
    // 事件绑定
    $('.banner-con .banner-arrow').click(function() {
    	var forword = $(this).hasClass('prev') ? 'prev' : 'next';
    	$slider.data('unslider')[forword]();
    })
});

