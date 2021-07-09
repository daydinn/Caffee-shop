import { Component, OnInit } from '@angular/core';
import { Getraenk } from './getraenk-model';
import{HttpClient, HttpHeaders} from'@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.css']
})
export class InfopageComponent implements OnInit {

    myGetraenkeArray = [];
   // Getränke von API/Localstorage
   
   getraenk : Getraenk[] = [
   new Getraenk(1,'Product 1', 'This is the product 1 description. The product is reall cool!',100),
   new Getraenk(2,'Product 1', 'This is the product 1 description. The product is reall cool!',150),
   new Getraenk(3,'Product 1', 'This is the product 1 description. The product is reall cool!',50),
   new Getraenk(4,'Product 1', 'This is the product 1 description. The product is reall cool!',200),
   new Getraenk(5,'Product 1', 'This is the product 1 description. The product is reall cool!',100),
   new Getraenk(6,'Product 1', 'This is the product 1 description. The product is reall cool!',150),
   new Getraenk(7,'Product 1', 'This is the product 1 description. The product is reall cool!',250),
  ]
 
    Getraenke = [

      { id:"Id" , sorte: "sorte", preis: "preis" },
      { id:"Id" , sorte: "sorte", preis: "preis" },
      { id:"Id" , sorte: "sorte", preis: "preis" },
      { id:"Id" , sorte: "sorte", preis: "preis" },
      { id:"Id" , sorte: "sorte", preis: "preis" },
      { id:"Id" , sorte: "sorte", preis: "preis" },
    
    ]
    
    private getraenksUrl="getraenke"
    myGetraenke: any;
    myZusatzstoffe: any;

 constructor(private http: HttpClient){}
 
 //constructor() { }

 ngOnInit(): void {
 this.getGetraenke();
 this.getZusatzstoffe();


  }
//für getränke von API(selber definiert)
  getDrinks(): Getraenk[]{
  return this.getraenk //gibt observable zurück
  }


getGetraenke(){
return this.http.get(this.getraenksUrl).subscribe(x =>{

  this.myGetraenke = x;
  console.log(this.myGetraenke);
  console.log("Laenge: "+this.myGetraenke.length);
  this.myGetraenkeArray = this.myGetraenke;
 
  //for int i  = 0 ,  x.length, i++
  // this.Getraenke.push(new Getraenk(x[i].Getraenke_ID,x.Sorte,))


  });
}
getZusatzstoffe(){
  return this.http.get("zusatzstoffe").subscribe(x =>{
  
   this.myZusatzstoffe = x;
  });

}


myFunction(x) {
  console.log(x);
  console.log("Row index is: " + x.rowIndex);
} 






}