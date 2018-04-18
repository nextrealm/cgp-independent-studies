<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Farm Facts</title>
	<meta name="description" content="Farm Facts">
	<meta name="author" content="Ben Murray">
	<link rel="stylesheet" href="css/main.css?v=1">
	<!--[if lt IE 9]>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
	<![endif]-->
	<?php if(false): ?>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<?php else: ?>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<?php endif; ?>
</head>
<body>
	<div id="modal" style="display:none;">
		<div id="modal-login" class="modal-container">
			<div id="modal-header">
				<span id="modal-close">&times;</span>
				<h3>Login</h3>
			</div>
			<div id="modal-body">
				<div id="loginAlert" class="alert alert-danger" role="alert" style="display: none;"></div>
				<form id="login">
					<div class="form-group">
						<label for="loginUsername">Username</label>
						<input type="text" class="form-control" id="loginUsername" aria-describedby="loginUsernameHelp" placeholder="Enter username">
						<small id="loginUsernameHelp" class="form-text text-muted">This is the username unique to your account.</small>
					</div>
					<div class="form-group">
						<label for="loginPassword">Password</label>
						<input type="password" class="form-control" id="loginPassword" placeholder="Enter password">
					</div>
					<button id="loginSubmit" type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
		<div id="modal-register" class="modal-container">
			<div id="modal-header">
				<span id="modal-close">&times;</span>
				<h3>Register</h3>
			</div>
			<div id="modal-body">
				<div id="registerAlert" class="alert alert-danger" role="alert" style="display: none;"></div>
				<form id="register">
					<div class="form-group">
						<label for="registerUsername">Username</label>
						<input type="text" class="form-control" id="registerUsername" aria-describedby="registerUsernameHelp" placeholder="Enter username">
						<small id="registerUsernameHelp" class="form-text text-muted">This is the username unique to your account.</small>
					</div>
					<div class="form-group">
						<label for="registerPassword">Password</label>
						<input type="password" class="form-control" id="registerPassword" placeholder="Enter password">
					</div>
					<button id="registerSubmit" type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
	</div>
	<?php if(true): ?>
	<script src="js/phaser.js"></script>
	<?php elseif(true): ?>
	<script src="//cdn.jsdelivr.net/npm/phaser@3.2.0/dist/phaser.js"></script>
	<?php else: ?>
	<script src="//cdn.jsdelivr.net/npm/phaser@3.2.0/dist/phaser.min.js"></script>
	<?php endif; ?>
	<script src="js/zepto.js"></script>
	<script src="js/ajax.js"></script>
	<script src="js/event.js"></script>
	<script src="js/user.js"></script>
	<script src="js/functions.js"></script>
	<script src="js/select.js"></script>
	<script src="js/emptyHandTool.js"></script>
	<script src="js/spadeTool.js"></script>
	<script src="js/wateringCanTool.js"></script>
	<script src="js/ploughTool.js"></script>
	<script src="js/tomatoesTool.js"></script>
	<script src="js/sickleTool.js"></script>
	<script src="js/game.js"></script>
	<script src="js/results.js"></script>
	<script src="js/main.js"></script>
</body>
</html>