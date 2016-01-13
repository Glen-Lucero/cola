<?php
	//This is the main home page for the Coca Cola Site
?>
<!DOCTYPE html>
<html lang ='en'>
	<head>
		<!-- Meta -->
		<meta charset='utf-8'>
		<meta http-equiv='X-UA-Compatible' content='IE=edge'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		
		<!-- Third Party Styles -->
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
		<link rel='stylesheet' href='assets/plugins/bootstrap-3.3.6/css/bootstrap.min.css'>
		<link rel='stylesheet' href='assets/pugins/font-awesome-4.5.0/css/font-awesome.min.css'>

		<!-- Custom Styles -->
		<link rel='stylesheet' href='assets/css/main.css'>
	</head>
	<body>
		<div class='navbar navbar-default coke-main-nav'>
			<div class='container'>
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">
						<img alt="Coca-Cola" src='assets/img/coke-logo1.png'>
					</a>
				</div>
				<div class="collapse navbar-collapse" id="main-nav">
					<!--<ul class="nav navbar-nav">
						<li>
							<a href="#">Link</a>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="#">Separated link</a></li>
								<li role="separator" class="divider"></li>
								<li><a href="#">One more separated link</a></li>
							</ul>
						</li>
					</ul>--> <!-- Save In case I come up with some use for this -->
					<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="#">Sign In</a>
						</li>
						<li>
							<a href="#">Sign Up</a>
						</li>
					</ul>
				</div><!-- /.navbar-collapse -->
			</div><!--/.container-fluid-->
		</div><!--/.navbar-->
		<div class='bg-main-img'></div>
		<div class='bg-main-wrapper'></div>
		<div class='promo'>
			<div class="container">
				<h1 class='text-center'>Promo Tagline</h1>
				<p class='text-center'>
					Ei mei platonem senserit, legendos iracundia repudiandae ad qui, sed oratio dicant ut. 
				</p>
			</div>	
		</div><!-- /.promo -->
		<div class='info-section'>
			<div class='container'>
			</div><!--/.container-->
		</div><!-- /.info-section -->
		<div class='footer'>
			<div class='container'>
			</div>
		</div><!--/.footer-->
	</body>
	<!-- Javascript -->
	<script type='text/Javascript' src='assets/js/jquery-1.12.0.min.js'></script>
	<script type='text/Javascript' src='assets/plugins/bootstrap-3.3.6/js/bootstrap.min.js'></script>
	<script type='text/Javascript' src='assets/plugins/bootbox.min.js'></script>
	<script type='text/Javascript' src='assets/js/main.js'></script>
</html>