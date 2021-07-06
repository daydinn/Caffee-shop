 // set up ======================== 
 var express  = require('express'); 
 var app      = express();              // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
 
 const bodyparser = require('body-parser')
// Body-parser middleware
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


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




//für mögliches Dashboard 
//Auflistung aller Getränke Bestellungen
 app.get('/bestellungen', function(req,res) 
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

        con.query("SELECT * FROM Bestellungen_Getranke",
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
//alle Kunden
 app.get('/kunden', function(req,res) 
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

        con.query("SELECT * FROM Kunden",
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


//Saving Funktionen 

//registrieren 
app.post('/reg', function(req,res) 
 {   
   console.log(req.body);  
   var id= req.body.id;
   var sorte = "\""+req.body.sorte+"\"";
   var preis = req.body.preis;
   var description = "\""+req.body.description+"\"";
   var imageURL = "\""+req.body.image+"\"";

   console.log(id);
   console.log(sorte);
   console.log(preis);
   console.log(description);
   console.log(imageURL);


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

        con.query("INSERT INTO Getraenke (Getraenke_ID,Sorte,description,Preis,imageURL) VALUES ("+id+","+sorte+","+description+","+preis+","+imageURL+")",
            function(error,results,fields){
                console.log(results);
                console.log(error);
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