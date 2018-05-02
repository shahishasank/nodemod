var rect=require('./clback');

function solveRect(l,b)
{
	rect(l,b,(err,clback)=>{
	if(err)
	{
		console.log("Error:",err.message);
		
	}
	else
	
	{
		console.log("values are"+l+"and"+b+"are as area"+clback.area()+"+clback.perimeter:"+clback.perimeter());
	}});
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,4);
solveRect(-3,5);