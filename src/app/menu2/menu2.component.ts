import { Component, OnInit } from '@angular/core';
import { Drink } from './drink-model';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  
    csk = new Drink(110, 'Kaffee schwarz klein', 2.5);
    csm = new Drink(111, 'Kaffee schwarz mittel', 3.5);
    csg = new Drink(112, 'Kaffee schwarz groß', 4.5);
    cak = new Drink(120, 'Cappucino klein', 3.10);
    cam = new Drink(122, 'Cappucino mittel',4.50);
    cag = new Drink(123, 'Cappucino groß',5.10);
 
 
 
 
 
 
 
 
 
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
