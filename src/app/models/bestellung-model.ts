import { stringify } from "@angular/compiler/src/util";

export class BestellungsObject {
public g_id;
public g_sorte;
public g_preis;
    
  constructor( id: number, sorte: string,  preis: number,  ){
  this.g_id = id;
  this.g_sorte=sorte;
  this.g_preis=preis;
    
    }
    
    }