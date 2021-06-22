import { Component, Input, OnInit } from '@angular/core';
import { Rec } from '../rec.model';

@Component({
  selector: 'app-rec-detail',
  templateUrl: './rec-detail.component.html',
  styles: [
  ]
})

export class RecDetailComponent implements OnInit {
@Input() selectedRec: Rec; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
