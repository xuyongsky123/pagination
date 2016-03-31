<?php
	header('Content-Type:text/html;charset=utf-8');

	$data = $_POST['current'];

	if($data == 1){
		echo '{"lists":[
		{"phoneNum":"18911594601","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594603","price":"300","yuPrice":"500","diPrice":"200"}
		],"pageNum":6}';
	}else if($data == 2){
		echo '{"lists":[
		{"phoneNum":"18911594601","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"}
		],"pageNum":6}';
	}else if($data == 3){
		echo '{"lists":[
		{"phoneNum":"18911594601","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"}
		],"pageNum":6}';
	}else if($data == 4){
		echo '{"lists":[
		{"phoneNum":"18911594601","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"}
		],"pageNum":6}';
	}else if($data == 5){
		echo '{"lists":[
		{"phoneNum":"18911594601","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"},
		{"phoneNum":"18911594602","price":"300","yuPrice":"500","diPrice":"200"}
		],"pageNum":6}';
	}else if($data == 6){
		echo '{"lists":[
		{"phoneNum":"18911594601","price":"300","yuPrice":"500","diPrice":"200"}
		],"pageNum":6}';
	}

	
?>