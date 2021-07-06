 // set up ======================== 
 var express  = require('express'); 
 var app      = express();              // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
 
 const bodyparser = require('body-parser');
const { analyzeAndValidateNgModules } = require('@angular/compiler');
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

 //kaufen

 app.post('/kaufen', function(req,res) 
 { console.log("###########KAUFEN###################")  
   console.log(req.body);  
   //var ids = req.body[1].getraenkeId;
   //var qtys = req.body[1].qty;
   //console.log(ids);
   //console.log(qtys);

   let list="";
   console.log(req.body.length-1); 
   for (let i = 0; i <= req.body.length-1; i++) {
     
    list += "("+req.body[i].getraenkeId+","+req.body[i].qty+")";
    if (i< req.body.length-1){list +="," }
  }
    list += ";"
    
    console.log("LIST : "+list);
  


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

        con.query("INSERT INTO Bestellungen_Getraenke(Getranke_ID,Anzahl) VALUES "+list,
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

 app.post('/kaufen', function(req,res) 
 { console.log("###########KAUFEN###################")  
   console.log(req.body);  
   //var ids = req.body[1].getraenkeId;
   //var qtys = req.body[1].qty;
   //console.log(ids);
   //console.log(qtys);

   let list="";
   console.log(req.body.length-1); 
   for (let i = 0; i <= req.body.length-1; i++) {
     
    list += "("+req.body[i].getraenkeId+","+req.body[i].qty+")";
    if (i< req.body.length-1){list +="," }
  }
    list += ";"
    
    console.log("LIST : "+list);
    //entweder mit antwort von output des sql states arbeiten 
    //erst Bestellung in Tabelle anlegen dann diese ID nutzen um Bestellungen_Getraenke zu füllen 
    //alternativ mehrere Metoden für die kaufen() Methode schreiben welche 
    //nacheinander die SQL Querys ausführt 
    //Ablauf :Kunde anlegen(post), get kunden, Eintrag Best anlegen(post) , get die Länge speicher, (getranke anlegen)

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

        con.query("INSERT INTO Bestellungen_Getraenke(Getranke_ID,Anzahl) VALUES "+list,
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