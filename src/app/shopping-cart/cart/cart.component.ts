import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Getraenk } from 'src/app/models/getraenk';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { threadId } from 'worker_threads';
//!%
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


cartItems = [
//{ id: 1, getraenkeId: 1, getraenkName:'Test 1', qty: 4, price: 100 },
//{ id: 2, getraenkeId: 2, getraenkName:'Test 2', qty: 5, price: 50 },
//{ id: 3, getraenkeId: 3, getraenkName:'Test 3', qty: 3, price: 150 },
//{ id: 4, getraenkeId: 4, getraenkName:'Test 4', qty: 2, price: 200 },

  ];
  

cartTotal = 0


constructor(private msg: MessengerService,
              private http:HttpClient) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((getraenk: Getraenk) => {
   this.AddGetraenToCart(getraenk)
   })
}

  AddGetraenToCart(getraenk: Getraenk){
    
    let getraenkExists = false
   
   //if the product matches
   for ( let i in this.cartItems){
   if( this.cartItems[i].getraenkeId === getraenk.id){
   this.cartItems[i].qty++
   getraenkExists = true
   break;
   }
   }
    
   if(!getraenkExists){
   this.cartItems.push({
    getraenkeId: getraenk.id,
     getraenkName: getraenk.name,
      qty: 1,
      price: getraenk.price
     })



    }
    
    
    
    
 
      this.cartTotal = 0 //weil wir warenkorb immer wieder berechnen
      this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
     
      })

  }
  isDisplaykaufen= false;
  isDisplaybox= true;
  
  kaufen(x){
    
    console.log("kaufen fired");
    console.log(this.cartItems);
    
    let data = {Bestell_ID:x, items:this.cartItems}
    console.log(data)
    //this.isDisplaybox= !this.isDisplaybox;
    //this.isDisplaykaufen= !this.isDisplaykaufen;

    return this.http.post('kaufen',data).subscribe(x =>{
      console.log("Bestellung abgeschlossen")
    });
      

  }

  order(){

    
    this.isDisplaybox= !this.isDisplaybox;
    this.isDisplaykaufen= !this.isDisplaykaufen;
    alert("Your " + this.cartTotal +   "€ order has been received!");
    this.cartTotal = 0
    this.cartItems = [];
    
  
  }


  bestellung(K_ID){

      let kundenID = {id:K_ID};
      console.log(K_ID);
      console.log(kundenID);
      console.log(kundenID.id)
      return this.http.post('bestellung',kundenID).subscribe(x =>{
        console.log(x);
        this.kaufen(x);
      });
    
    
  }

  kundenreg(){

    
  }


  onClickSubmit(data){
    console.log(data);
    let x_ID;
    if (this.cartItems.length>0) {
      return this.http.post('kundenreg',data).subscribe(x =>{
        x_ID = x;
         this.bestellung(x_ID)       
      });
    }
    
    alert("VorName: " +data.vorname+" Nachname "+data.nachname);
  }


 


 

}
