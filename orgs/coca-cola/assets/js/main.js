$(document).ready(function(){
	$("#logout").click(function(){
		window.location = "file:///Users/glenlucero/Lucero/index.html";
	});

	$("li a.solution").click(function(){
		$path = $(this).data('path');
		$page = $(this).data('page');

		if($page === "home"){
			$("#pseudo-body").html(
				"<div class='home-bg'></div>"+
				"<div class='home-default'>"+
					"<div class='container'>"+
						"<h1 class='text-center'>This is a Title</h1>"+
						"<p class='text-center'>Ei mei platonem senserit, legendos iracundia repudiandae ad qui, sed oratio dicant ut. </p>"+
					"</div>"+
				"</div>");
		}
		else{
			$("#pseudo-body").load($path + $page);
		}
	});
});