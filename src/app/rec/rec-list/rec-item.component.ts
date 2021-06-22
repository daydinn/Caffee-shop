import { Component,OnInit,Input, Output,EventEmitter} from '@angular/core';

import { Rec } from '../rec.model';

@Component({
  selector: 'app-rec-item',
  templateUrl: './rec-item.component.html',
  styles: [
  ]
})
export class RecItemComponent implements OnInit {
 @Input() rec: Rec; 
 @Output() recSelected = new EventEmitter<Rec>();


  constructor() { }

  ngOnInit(): void {
  }
onSelect() {
this.recSelected.emit(this.rec);
}
}

