$(document).ready(function(){
	//This is the main JS for the Coca-Cola site

	//Sign Up Modal
	$(".register").click(function(){
		bootbox.dialog({
			className: "home-modal",
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
				cancel:{
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
			className: "home-modal",
			size: "small",
			title: "Login",
			message: "<form id='login'>"+
						"<div class='form-group'>"+
							"<label for='username'>Email</label>"+
							"<input name='username' id='username' class='form-control'/>"+
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
						var username = $('#username').val();
						var password = $("#password").val();
						var valid = false; //Use to detertmine whether the account info is valid
						var org = ""; //The company account that is being sign into

						if(username.length!== 0 && password.length !== ""){
							//Here I will need to post the values, check the database, return some value, and send them to the proper page.

							if(username.toLowerCase() == "cola" && password.toLowerCase() == "demo"){
								valid = true; //Hard code for GUI TESTING.
								org = "coca-cola"; //This will be the path to the companies page/solutions
							}
						}
						
						if(valid === false){
							$("#username").addClass("red-input");
							$("#password").addClass("red-input");
							return false; //Use this to prevent the modal from closing
						}
						else{
							window.location = "file:///Users/glenlucero/Lucero/orgs/"+org+"/index.html";
						}
					}
				},
				cancel:{
					label:"Cancel",
					className:"btn-danger",
					callback: function(){

					}
				}
			}
		});
	});
});