# pagination
pagination-plugin-基于jQuery插件开发的自定义插件-局部上拉异步刷新加载数据


html:
    <div class="p_container">
    		<div class="i_container">
    			<div class="p_lists">
    
    				<!--can modify - begin-->
    				<!--<div class="numSingle">
    					<div class="rowContainer">
    						<div class="col-2">18911594604</div>
    						<div class="col-1">价:200元</div>
    						<div class="col-1">预:500元</div>
    						<div class="col-1">低:100元</div>
    					</div>
    				</div>-->
    				<!--can modify - end-->
    
    			</div>
    			<div class="dropTip"></div>
    		</div>
    	</div>

css:
    .p_container {height:400px;overflow: hidden;overflow-y:scroll;} //这里的高度可自行调节
    
script（调用方法）:
    $(function(){
		$('.p_container').pagination({
			num:5,
			ajaxEvent:function(me){
				$.ajax({
	                type: 'GET',
	                url: 'server.php',
	                dataType: 'json',
	                cache:false,  //解决scroll滚动多次执行BUG
	                beforeSend:function(){
	                	me.loadingTip(me);  //传递me作为对象，调用插件内部方法，显示“加载中”提示信息栏
	                },
	                success: function(data){
	                    var result = '';
	                    console.log(data.lists[0].phoneNum)
	                    for(var i = 0; i < me.opts.num; i++){
	                        result +=   '<div class="numSingle"><div class="rowContainer t2"><div class="col-2 phoneNum">'+data.lists[i].phoneNum+'</div><div class="col-1">价:'+data.lists[i].price+'元</div><div class="col-1">预:'+data.lists[i].yuPrice+'元</div><div class="col-1">低:'+data.lists[i].diPrice+'元</div></div></div>';
	                    }

	                    // 为了测试，延迟1秒加载
	                    setTimeout(function(){
	                        $('.p_lists').append(result);

		                    //隐藏底部提示信息栏
		                    me.hideTip(); //传递me作为对象，调用插件内部方法，去除提示信息栏
	                    },1000);


	                    _flag = true;//解决scroll多次执行事件BUG，不能丢
	                },
	                error: function(xhr, type){
	                    //alert('Ajax error!');
	                }
	            });
			},
		});
	});
	
	
	
	插件调用方法：
	    $('.p_container').pagination({
	      num:5,   //一次加载个数
	      ajaxEvent:function(me){   //异步加载数据执行函数 -- 通常ajax
	          me //传参以调用插件内部信息提示栏目相关的方法，以下举例
	          me.hideTip();     //清空提示信息栏
	          me.noDataTip();   //无数据提示信息栏
	          me.loadingTip();  //加载中信息提示栏
	          
	          //这些提示信息栏也是可以自行设置，非必需调用插件内部方法
	          
	          
	      }
	    });
	    
	    
兼容性：
    IE8及以上支持，其他浏览器兼容（IE兼容）
    
    
注意事项：
    在ajaxEvent函数中加载数据的ajax需要注意几点
    其中（必备）
    1、ajax参数需要设置    cache:false
    2、同时在回调函数success中结尾处必须加上   _flag = true
    这两点是为了解决scroll执行时，多次触发事件执行BUG
	    
	    
	    