import { Component, OnInit } from '@angular/core';
import { Getränk } from './getränk-model';
import{HttpClient, HttpHeaders} from'@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

    myGetraenkeArray = [];

    csk = new Getränk(110, 'Kaffee schwarz klein', 2.5);
    csm = new Getränk(111, 'Kaffee schwarz mittel', 3.5);
    csg = new Getränk(112, 'Kaffee schwarz groß', 4.5);
    cak = new Getränk(120, 'Cappucino klein', 3.10);
    cam = new Getränk(122, 'Cappucino mittel',4.50);
    cag = new Getränk(123, 'Cappucino groß',5.10);
 
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


getGetraenke(){
return this.http.get(this.getraenksUrl).subscribe(x =>{

 this.myGetraenke = x;
 console.log(this.myGetraenke);
 console.log("Laenge: "+this.myGetraenke.length);
 this.myGetraenkeArray = this.myGetraenke;
 

 


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