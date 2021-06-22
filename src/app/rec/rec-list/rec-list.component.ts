import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Rec } from '../rec.model';

@Component({
  selector: 'app-rec-list',
  templateUrl: './rec-list.component.html',
  styles: [
  ]
})
export class RecListComponent implements OnInit {
  @Output() recSelected = new EventEmitter<Rec>();
  rec = new Rec('Expresso','Expresso','https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'); //ich möchte diese rec an meinem rec item übergeben/dsw propheritybinding
  
  selectedRec: Rec;
constructor() { }

  ngOnInit()  {
  }
 onSelected(rec: Rec){
  this.recSelected.emit(rec);

 }
  
}