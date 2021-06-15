import { Component, Input, OnInit } from '@angular/core';
import { Rec } from '../rec.model';

@Component({
  selector: 'app-rec-item',
  templateUrl: './rec-item.component.html',
  styles: [
  ]
})
export class RecItemComponent implements OnInit {
@Input() rec: Rec;
  constructor() { }

  ngOnInit(): void {
  }

}
