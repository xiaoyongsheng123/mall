/*
* @Author: Xiao
* @Date:   2018-12-25 16:06:59
* @Last Modified by:   Xiao
* @Last Modified time: 2019-01-16 10:03:28
*/
'use strict'
require('./index.css')

var _tool = require('util/tool.js');
var _user = require('service/user-service.js');
var _cart   = require('service/cart-service.js');

// 通用页面头部
var nav = {
    init: function() {
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCount();
        return this;
    },
    bindEvent: function() {
        // 登录点击事件
        $('.js-login').click(function() {
            _tool.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function() {
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function() {
            _user.logout(function(res) {
                window.location.reload();
            }, function(errMsg) {
                _tool.errorTips(errMsg);
            });
        });
    },
    // 加载用户信息
    loadUserInfo: function() {
        _user.checkLogin(function(res) {
            $('.user.not-login').hide().siblings('.user.login').show()
                .find('.username').text(res.username);
        }, function(errMsg) {
            // do nothing
        });
    },
    // 加载购物车数量
    loadCartCount: function() {
        _cart.getCartCount(function(res) {
            $('.nav .cart-count').text(res || 0);
        }, function(errMsg) {
            $('.nav .cart-count').text(0);
        })
    }
};

module.exports = nav.init();
