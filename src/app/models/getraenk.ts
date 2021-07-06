import { stringify } from "@angular/compiler/src/util";

export class Getraenk {
public id: number;
public name: string;
public description: string;
public price: number;
public imageUrl: string;
    
  constructor(id ,name, description = "", price = 0, imageUrl = 'https://images.unsplash.com/photo-1615485736894-a2d2e6d4cd9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'){
  this.id = id;
  this.name =name;
  this.description= description;
  this.price = price;
  this.imageUrl = imageUrl;
    }
    
    }