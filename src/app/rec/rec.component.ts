import { Component, OnInit } from '@angular/core';
import { Rec } from './rec.model';

@Component({
  selector: 'app-rec',
  templateUrl: './rec.component.html',
  styles: [
  ]
})
export class RecComponent implements OnInit {
selectedRec: Rec;
  constructor() { }

  ngOnInit() {
  }

}
