var express=require('express'),
app =express(),
session=require('express-session');
app.use(session({
	secret:'loda',
	resave:true,
	saveUninitialized:true
}));
var auth= function(req,res,next){
	if(req.session&&req.session.user=="abc"&&req.session.admin)
		return next();
	else
		return res.sendStatus(401);
};

app.get('/login',function(req,res){
	if(!req.query.username||!req.query.password)
		res.send('login failure');
	else if(req.query.username=="abc"&&req.query.password=="111"){
		req.session.user="abc";
		req.session.admin=true;
		res.send("Logged in");
	}
});

app.get('/logout',function(req,res){
	req.session.destroy();
	res.send("Logged out");
});

app.get('/content',auth,function(req,res){
	res.send("Already log in");
});
app.listen(3000);
