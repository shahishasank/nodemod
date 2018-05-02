
var express=require('express'),
  app=express(),
  session=require('express-session');
app.use(session({
     secret:'Mysecret',
	 resave:true,
	 saveUninitialized:true
	 }));
	 
	 //authentication and authorization middleware
	  var auth=function(req,res,next){
	  if(res.session&&res.session.user==="suraj" && req.session.admin)
	  return next();
	  
	  else
	  return res.sendStatus(401);
	  };
	  //login endpoint
	  app.get('/login',function(req,res){
	  if(!req.query.username||!req.query.password){
	  res.send('login failed');
	  
	  
	  }
	  else if(req.query.username==="suraj" || req.query.password==="suraj1150"){
	    req.session.user="suraj";
		req.session.admin=true;
		res.send("login successfully");
		}
		}
		);
		
		//logout endpoint
		
		app.get('/logout',function(req,res){
		req.session.destroy();
		res.send("logout success!");
		});
		
		//get content endpoint
		app.get('/content',auth,function(req,res){
		  res.send("u see content u are login");
		  });
		  
		  app.listen(5000);
		  console.log("Running at http://localhost:5000");
	  
	  
	  
	  