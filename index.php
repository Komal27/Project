<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="login.js" typr="text/javascript"></script> <!-- load our javascript file -->
  <link rel="text/css" href-"stylesheet/style.css">
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">CSUF</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>

  </div>
</nav>

<div class="container">

    <h2 class="text-center">Login</h2>
    <form class="form-horizontal" action="#" name="login" method="POST">
    <div class="form-group">
      <label class="control-label col-sm-4" for="user">Username:</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" id="uname" placeholder="Enter Username" name="username" required>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4" for="pwd">Password:</label>
      <div class="col-sm-4">
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-4 col-sm-4">
        <div class="checkbox">
          <label><input type="checkbox" name="remember"> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-4 col-sm-4">
        <button type="submit" class="btn btn-default" href="#" name="submit" id="login" >Login</button>
      </div>
      <p class="show"></p>
    </div>
  </form>
</div>

</body>
</html>
