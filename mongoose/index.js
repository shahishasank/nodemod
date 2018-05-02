const mongoose=require("mongoose");
mongoose.Promise=require("bluebird");
const Dishes= require("./modals/dishes");
const url="mongodb://localhost:27017/Midb";
const connect=mongoose.connect(url,{ useMongoClient:true});
connect.then((db)=>{
	var nd=Dishes({
		name:'abc',
		description:'asdf'
	});
	nd.save().then((dish)=>{
		console.log("saved");
		return Dishes.find({}).exec();
	}).catch((err)=>{
		console.log(err);
	});
});