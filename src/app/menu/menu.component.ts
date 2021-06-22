import { Component, Input, OnInit } from '@angular/core';
import { Getränk } from './getränk-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  csk = new Getränk(110, 'Kaffee schwarz klein', 2.5);
  csm = new Getränk(111, 'Kaffee schwarz mittel', 3.5);
  csg = new Getränk(112, 'Kaffee schwarz groß', 4.5);
  cak = new Getränk(120, 'Cappucino klein', 3.10);
  cam = new Getränk(122, 'Cappucino mittel',4.50);
  cag = new Getränk(123, 'Cappucino groß',5.10);

  
  constructor() { }

  ngOnInit(): void {
  }

}
