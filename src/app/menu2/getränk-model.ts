import { stringify } from "@angular/compiler/src/util";

export class Getränk {
public id;
public sorte;
public preis;
    
  constructor(  id: number, sorte: string,  preis: number){
  this.id = id;
  this.sorte=sorte;
  this.preis=preis;
    
    }
    
    }