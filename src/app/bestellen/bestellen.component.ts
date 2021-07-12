import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-bestellen',
  templateUrl: './bestellen.component.html',
  styleUrls: ['./bestellen.component.css']
})
export class BestellenComponent implements OnInit {

  f5sub;
  
  constructor(private router:Router) { 

    /* this.f5sub = router.events.subscribe((event) => {
       console.log(event)
      if (event instanceof NavigationStart){
        let  browserRefresh = !router.navigated;
        console.log(browserRefresh)
      }
    })*/ //versuch die Reload funktion auf F5 richtig zu Routen bzw das Event erstmal zu lesen 

  }

  ngOnInit(): void {

   
  }
  onReload(){
    console.log("Reload")
    this.router.navigateByUrl('/bestellen',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['bestellen']);
    })

  }

  

  
}
