 // set up ======================== 
 var express  = require('express'); 
 var app      = express();              // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
 
 // configuration =================
  app.use(express.static(path.join(__dirname, '/dist/coffee-shop')));  
 
 // application -------------------------------------------------------------
  app.get('/', function(req,res) 
 {   
 
   res.sendFile('index.html', { root: __dirname+'/dist/coffee-shop' });             
 });

 app.get('/getraenke', function(req,res) 
 {   
 
    var con = mysql.createConnection({
        database: "21_DB_Gruppe4",
        host: "195.37.176.178",
        port: "20133",
        user: "21_DB_Grp_4",
        password: "Snc\"X|8WT\"/B'rwFeeURY19S@dqwiUYR"
    });

    con.connect(function(err)
    {
        if(err) throw err;
        console.log("Connected");

        con.query("SELECT * FROM Getraenke",
            function(error,results,fields){
                console.log(results);
                res.send(results); 
    
                con.end(function(err)
                {
                    if(err) throw err;
                    console.log("Connection end");
                });   
            }
        );
    });
           
 });

 app.get('/zusatzstoffe', function(req,res) 
 {   
 
    var con = mysql.createConnection({
        database: "21_DB_Gruppe4",
        host: "195.37.176.178",
        port: "20133",
        user: "21_DB_Grp_4",
        password: "Snc\"X|8WT\"/B'rwFeeURY19S@dqwiUYR"
    });

    con.connect(function(err)
    {

        if(err) throw err;
        console.log("Connected");

        con.query("SELECT * FROM Zusatzstoffe",
            function(error,results,fields){
                console.log(results);
                res.send(results); 
    
                con.end(function(err)
                {
                    if(err) throw err;
                    console.log("Connection end");
                });   
            }
        );
    });
           
 });






// listen (start app with node server.js) ======================================
 app.listen(8080, function(){   
        console.log("App listening on port 8080");
 });