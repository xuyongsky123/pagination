var _flag = true; //解决scroll多次执行事件BUG，不能丢

;(function($){
	//默认参数及其介绍
	var defaults = {
		num:5,		//一次加载个数
		singleHeight:45, //单个循环dom高度，用于初次加载初始化（计算刚刚开始需要加载次数）
		ajaxEvent:function(me){
			$.noop();
		},
	};


	$.fn.pagination = function(options){
		//判断循环个体高度设置情况
		if(!options.singleHeight){
			alert('error ! singleHeight 为必须配置参数');
			return;
		}

		var params = $.extend(defaults,options);
		return new paginationInner(this,params);
	}
	var paginationInner = function(element,options){
		this.init(element,options);
	};

	paginationInner.prototype.init = function(element,options){
		var me = this;
		var ele = element;

		me.opts = $.extend({
			tipText : {
				domLoad:'<span><i></i>加载中</span>',
				domNoData:'<span>暂无数据</span>'
			}
		},options);


		//初始化加载单个循环dom高度判断
		if(isNaN(me.opts.singleHeight)){
			alert('error ! singleHeight 值不能为非数字');
			return;
		}

	    //初始化加载
	    var initTotalNum = Math.ceil(Math.ceil(($(ele).height()/me.opts.singleHeight)/me.opts.num));
		var _inter = setInterval(function(){
			if(initTotalNum > 0){
				me.opts.ajaxEvent(me);
				initTotalNum -- ;
			}else{
				clearInterval(_inter);
			}
		},500);
	    
	    
	    $(ele).on('scroll',function(){
	    	if(_flag && $(this).scrollTop() >= $('.i_container').height() - $(this).height()){
	    		setTimeout(function(){
	    			me.opts.ajaxEvent(me);
	    		},500);
	    		_flag = false;
	    	}
	    });
	};

	//清空提示信息栏
	paginationInner.prototype.hideTip = function(){
		$('.dropTip').html('');
	}
	//无数据提示信息栏
	paginationInner.prototype.noDataTip = function(me){
		$('.dropTip').html(me.opts.tipText.domNoData);
	}
	//加载中信息提示栏
	paginationInner.prototype.loadingTip = function(me){
		$('.dropTip').html(me.opts.tipText.domLoad);
	}
})(jQuery);