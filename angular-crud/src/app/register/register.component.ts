import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myData: string;
response:any;
public successData:any;


registerForm:FormGroup = new FormGroup({
  username:new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.email,Validators.required]),
  password:new FormControl(null,[Validators.required,Validators.minLength(6)])
})
public payload:string;
  constructor(private _userService:CrudService, private _router:Router) { }

  ngOnInit() {

  }

  register(){
    console.log("test");
  if(!this.registerForm.valid){
    console.log('Invalid Form');return;
     }
     this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(data => this.successData = data); 
     }





}
