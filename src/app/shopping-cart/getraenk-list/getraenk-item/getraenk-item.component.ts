//%

import { Component, OnInit, Input } from '@angular/core';
import { Getraenk } from 'src/app/models/getraenk';

import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-getraenk-item',
  templateUrl: './getraenk-item.component.html',
  styleUrls: ['./getraenk-item.component.css']
})
export class GetraenkItemComponent implements OnInit {

  @Input() getraenkItem: Getraenk

  constructor(private msg: MessengerService) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.getraenkItem)
  }

}