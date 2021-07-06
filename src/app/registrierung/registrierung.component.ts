import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders} from'@angular/common/http';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.component.html',
  styles: [`
  
  .container-login {
    width: 402px;
    margin: auto;
    text-align: center;
    margin-top: 40px;
  }
.tile {
    background-color: #009879;
    border-radius: 10px;
    border: 5px solid green;
  }
h3 {
    padding-top: 10px;
    font-size: 24px;
    font-weight: 600;
}
input[type=email],
input[type=password],
input[type=submit],
input[type=text] {
background-color: #dedede;
font-size: 16px;
padding: 7px;
border: 1px solid green;
border-radius: 5px;
margin: 5px 10px;
width: 351px;
box-sizing: border-box;
  }
  form {
    margin-bottom: 10px;
  }
  input[type=submit] {
    background-color: darkcyan;
    color: white;
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .half input[type=text] {
    width: 180px;
    float: left;
  }
  #organisation {
    float: left;
    margin: 30px 0px;
    color: #009879;
  }
  /* focus wenn wir in input clicken */
  input:focus {
    border: 2px solid green;
    background-color: #ecf0f1;
  }
  

  
  
  

  
  `]
})
export class RegistrierungComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registrieren(){
    
    console.log("registrieren fired");
    return this.http.post('reg',{id: "777", sorte:"WasserERES",description:"MOIN Geiles Wasser", preis:"2.85", image:"https://google.com"}).subscribe();
      


    }

}