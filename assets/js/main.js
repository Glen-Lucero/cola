$(document).ready(function(){
	//This is the main JS for the Coca-Cola site

	//Sign Up Modal
	$(".register").click(function(){
		bootbox.dialog({
			className: "coke-modal",
			size: "small",
			title: "Registration",
			message: "<form id='register'>"+
						"<div class='form-group'>"+
							"<label for='email'>Email</label>"+
							"<input name='email' id='email' class='form-control'/>"+
						"</div>"+
						"<div class='form-group'>"+
							"<label for='password'>Password</label>"+
							"<input type='password' name='password' id='password' class='form-control'/>"+
						"</div>"+
						"<div class='form-group'>"+
							"<label for='password-c'>Confirm Password</label>"+
							"<input type='password' name='password-c' id='password-c' class='form-control'/>"+
						"</div>"+
					"</form>",
			buttons:{
				success:{
					label:"Sign Up",
					className:"btn-success",
					callback: function(){

					}
				},
				danger:{
					label:"Cancel",
					className:"btn-danger",
					callback: function(){

					}
				}
			}
		});
	});

	//Sign in Modal
	$("#sign-in").click(function(){
		bootbox.dialog({
			className: "coke-modal",
			size: "small",
			title: "Login",
			message: "<form id='login'>"+
						"<div class='form-group'>"+
							"<label for='email'>Email</label>"+
							"<input name='email' id='email' class='form-control'/>"+
						"</div>"+
						"<div class='form-group'>"+
							"<label for='password'>Password</label>"+
							"<input type='password' name='password' id='password' class='form-control'/>"+
						"</div>"+
					"</form>",
			buttons:{
				success:{
					label:"Sign In",
					className:"btn-success",
					callback: function(){

					}
				},
				danger:{
					label:"Cancel",
					className:"btn-danger",
					callback: function(){

					}
				}
			}
		});
	});
});