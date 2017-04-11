import Config from '../config/config.js';
import axios from 'axios';

export default {
	get: function(opt, callback) {
        var task;
        var count  = 0;
        var that   = this;
		var url    = encodeURI(opt.url);

        task = function () {
        	axios.get(url, {
        		params: opt.data,
        		timeout: Config.timeout,
        		withCredentials: true,
        	}).then(function (response) {
        		callback(response);
        	}).catch(function (error) {
        		console.log('error = ' + JSON.stringify(error));
        	});
        };

        task();
	},

	post: function(opt, callback) {
        if (opt.alert === undefined) {
            opt.alert = true;
        }

        $.ajax({
            type: 'POST',
            url: opt.url,
            dataType: 'json',
            timeout: Config.timeout,
            data: opt.data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
            if (json && json.Message && json.Message === '未登录' && !opt.canLogout) {
                PubSub.publish('onNotLoginIn', {});
                return;
            }

        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            console.log('【*****POST请求报错*****】：' + error);
            console.log('【*****参数*****】：' + JSON.stringify(opt));
        });
	},

	put: function(opt, callback) {
        $.ajax({
            type: 'PUT',
            url: opt.url,
            dataType: 'json',
            timeout: Config.timeout,
            data: opt.data,
            xhrFields: {
            	withCredentials: true
            }
        }).done(function (json) {
        	if (typeof callback === 'function') {
        		callback(json);
        	}
        }).fail(function (xhr, testStatus, error) {
            console.log('【*****PUT请求报错*****】：' + error);
            console.log('【*****参数*****】：' + JSON.stringify(opt));
        });
	},

    getLoginStatus: function (callback) {
        var opt  =  {
            url: Config.urls.loginStatus,
            data: {}
        };

        this.get(opt, callback);
    },

    getGameLoginUrl: function (platform, type, gameIdentify, cb) {
        var opt =  {
            url: Config.urls.getGameLoginUrl,
            data: {
                gamePlatform: platform,
                gameType: type,
                gameId: gameIdentify
            }
        };

        var callback = function (data) {
            if (typeof cb === 'function') {
                cb(data);
            } else {
                window.open(data);
            }
        };

        this.get(opt, callback);
    }
};