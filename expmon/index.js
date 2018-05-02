/*const express=require('express');
const morgan=require('morgan');
const http=require('http');
const hostname='localhost';
const port=3000;
const app=express();

app.use(morgan('dev'));
//app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-type','text/html');
	res.end('<html><body>aljfhisubfkdsjfb</body></html>');
});

const server=http.createServer(app);
server.listen(port,hostname,()=>{
	//console.log("Server listning");
});*/


const mongoClient= require('mongodb').MongoClient;
const assert=require('assert');
const url='mongodb://localhost:27017/test';
mongoClient.connect(url,(err,database)=>{
	assert.equal(err,null);
	console.log('lol its working');
	const dbs=database.db('test');
	const collection=dbs.collection('mine');
	collection.insertOne({"name":"sha","age":20}, (err, result)=>{
		assert.equal(err,null);
		console.log("connected");
		console.log(result.ops);
		collection.find({}).toArray((err,docs)=>{
			assert.equal(err,null);
			console.log('found');
			console.log(docs);
			dbs.dropCollection("mine",(err,result)=>{
				assert.equal(err,null);
				database.close();
			});
		});
	});
});