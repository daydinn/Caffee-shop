//%


import { Component, OnInit } from '@angular/core';
import { GetraenkService } from 'src/app/services/getraenk.service';
import { Getraenk } from 'src/app/models/getraenk';


@Component({
  selector: 'app-getraenk-list',
  templateUrl: './getraenk-list.component.html',
  styleUrls: ['./getraenk-list.component.css']
})
export class GetraenkListComponent implements OnInit {

  
  getraenkeList: Getraenk[] = []  //can be used inside of productlist component now
  

  //dependency injection of product service
  constructor(private getraenkService: GetraenkService) { }

  ngOnInit(){ //load
  
  this.getraenkeList = this.getraenkService.getGetraenke();
   
  
  }

}
