import { Injectable} from '@angular/core';
import { Getraenk } from '../models/getraenk';

// %

@Injectable({
  providedIn: 'root'
})
export class GetraenkService {
//Wieso Services
//bestimmte Elemente in Services auszulagern und diese Services an verschiedenen Stellen wieder benutzen



  //TODO: Getränke von API/Localstorage usw..
  getraenke : Getraenk[] = [
  new Getraenk(1,'Getraenk 1', 'This is the product 1 description. The product is reall cool!',100),
  new Getraenk(2,'Getraenk 2', 'This is the product 1 description. The product is reall cool!',150),
  new Getraenk(3,'Getraenk 3', 'This is the product 1 description. The product is reall cool!',50),
  new Getraenk(4,'Getraenk 4', 'This is the product 1 description. The product is reall cool!',200),
  new Getraenk(5,'Getraenk 5', 'This is the product 1 description. The product is reall cool!',100),
  new Getraenk(6,'Getraenk 6', 'This is the product 1 description. The product is reall cool!',150),
  new Getraenk(7,'Getraenk 7', 'This is the product 1 description. The product is reall cool!',250),
 ]
  
  
  constructor() { }
//TODO: mit Getranke von API befüllen, (returns an Observable)

getGetraenke(): Getraenk[]{
return this.getraenke //gibts die Array(getreank zurück)
}

}
