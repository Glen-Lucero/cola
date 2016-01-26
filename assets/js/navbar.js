$(document).ready(function(){
	$body_content = $("#pseudo-body").html();

	$(".navbar-brand").click(function(){
		$("#pseudo-body").html($body_content);
	});

	$("li a.solution").click(function(){
		$path = $(this).data('path');
		$page = $(this).data('page');

		if($page === "home"){
			$("#pseudo-body").html($body_content);
		}
		else{
			$("#pseudo-body").load($path + $page);
		}
	});
});