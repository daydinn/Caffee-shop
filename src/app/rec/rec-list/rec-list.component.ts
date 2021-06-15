import { Component, OnInit } from '@angular/core';
import { Rec } from '../rec.model';

@Component({
  selector: 'app-rec-list',
  templateUrl: './rec-list.component.html',
  styles: [
  ]
})
export class RecListComponent implements OnInit {
rec= new Rec('Expresso','3 Euro','https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG');
  constructor() { }

  ngOnInit(): void {
  }

}
