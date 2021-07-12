import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  model={
    name:null,
  }
  constructor(private http:HttpClient) {


   }



  ngOnInit(): void {
  }


  searchName(data){
  //Gibt uns detaillierte Bestellinfos pro Name aus 
    
    return this.http.post('searchByName',data).subscribe(x =>{  
        console.log(x)
    });
    

  }


  delete(kundenname){


  }

}
