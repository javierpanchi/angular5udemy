import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:Srting;
  password:String;
  router:Route;

  constructor(private _router:Router){
    this.router=_router;
  }

  checkUserNamePassword(){
    if(this.username=="abc" && this.password=="123"){
      alert("Ready");
    }
  }

  checkKey(event){
     if(event.keyCode == 13) {
       this.checkUserNamePassword();
     }
  }
}
