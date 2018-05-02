const mongoose=require("mongoose");
const schema=mongoose.Schema;
const dish=new schema({
	name:{
		type:String,
		require:true
	},
	description:{
		type:String,
		require:true
	}
},
{
timestamps: true}
);
var d=mongoose.model('Dish',dish);
module.exports=d;
