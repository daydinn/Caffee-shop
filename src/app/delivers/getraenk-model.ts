import { stringify } from "@angular/compiler/src/util";

export class Getraenk {

 id: number;
 name: string;
 description: string;
 price: number;
 imageUrl: string;
    
  constructor(id, name, description = "", price = 0, imageUrl = 'https://toriavey.com/images/2013/04/Coffee-A-Caffeinated-History.jpg'){
  this.id = id
  this.name =name
  this.description= description
  this.price = price
  this.imageUrl = imageUrl
    }
    
    }