var _flag = true; //解决scroll多次执行事件BUG，不能丢

;(function($){
	//默认参数及其介绍
	var defaults = {
		num:5,		//一次加载个数
		pageCurrent:1,
		pageAll:0,
		ajaxEvent:function(me){
			$.noop();
		},
	};


	$.fn.pagination = function(options){
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

		
		//处理提前需加载
		me.resetLoad();
	    
	    
	};


	//处理提前需加载
	paginationInner.prototype.resetLoad = function(){
		var me = this;
		
		var _h = $('.i_container').height();
		var _hC = $('.p_container').height();

		if(_h <= _hC){
			me.opts.ajaxEvent(me);
		}else{

		    $('.p_container').on('scroll',function(){
		    	if(_flag && $(this).scrollTop() >= $('.i_container').height() - $(this).height()){
		    		setTimeout(function(){
		    			me.opts.ajaxEvent(me);
		    		},500);
		    		_flag = false;
		    	}
		    });
		}
	}


	//清空提示信息栏
	paginationInner.prototype.hideTip = function(){
		$('.dropTip').html('');
	}
	//无数据提示信息栏
	paginationInner.prototype.noDataTip = function(me){
		$('.dropTip').html(me.opts.tipText.domNoData);
		$('.p_container').unbind();
	}
	//加载中信息提示栏
	paginationInner.prototype.loadingTip = function(me){
		$('.dropTip').html(me.opts.tipText.domLoad);
	}
})(jQuery);