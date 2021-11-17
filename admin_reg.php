
<!DOCTYPE html>
<html>
<head>
	<title>FlowFitness | Admin Singup</title>
	<link rel="stylesheet" href="./css/style.css"/>
	<link rel="stylesheet" type="text/css" href="./css/entypo.css">
	<style>
		.errorWrap {
    padding: 10px;
    margin: 0 0 20px 0;
    background: #fff;
    border-left: 4px solid #dd3d36;
    -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
.succWrap{
    padding: 10px;
    margin: 0 0 20px 0;
    background: #fff;
    border-left: 4px solid #5cb85c;
    -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
}
		</style>
    
</head>
<body  class="page-body login-page login-form-fall">
    	<div id="container">
			<div class="login-container">
	
	            <div class="login-header login-caret">
		
		            <div class="login-content">
			
			             <a href="#" class="logo">
				            <img src="./logo.png" alt="" />
			            </a>
			
		            </div>
                </div>
            </div>
        </div>        	
	<div class="login-form">
		
		<div class="login-content">
			
			<form action="adminreg.php" name="singup" method='post' id="bb">				
				<div class="form-group">					
					<div class="input-group">
						<div class="input-group-addon">
							<i class="entypo-user"></i>
						</div>
							<input type="text" placeholder="Admin Name" class="form-control" name="admin_name" id="textfield" data-rule-minlength="6" data-rule-required="true" required>
					</div>
				</div>
                <div class="form-group">					
					<div class="input-group">
						<div class="input-group-addon">
							<i class="entypo-user"></i>
						</div>
                            <input type="text" placeholder="User ID" class="form-control" name="user_id_auth" id="textfield2" data-rule-minlength="6" data-rule-required="true"requried>
					</div>
				</div>						
								
				<div class="form-group">					
					<div class="input-group">
						<div class="input-group-addon">
							<i class="entypo-key"></i>
						</div>
						<input type="password" name="pass" id="pwfield" class="form-control" data-rule-required="true" data-rule-minlength="6" placeholder="Password" required>
					</div>				
				</div>
                <div class="form-group">					
					<div class="input-group">
						<div class="input-group-addon">
							<i class="entypo-key"></i>
						</div>
                        <input type="password" name="confirmpass" id=" con_pwfield" class="form-control" data-rule-required="true" data-rule-minlength="6" placeholder="Confrim Password" required>
					</div>				
				</div>
				
				<div class="form-group">
					<button type="submit" name="btnLogin" class="btn btn-primary">
						Sing Up
						<i class="entypo-login"></i>
					</button>
					<a href="index.php" class="link">   <strong>login</strong> </a>
				</div>
			</form>
		
		
		</div>
		
	</div>
	
    </div>
</div>
</body>
</html>