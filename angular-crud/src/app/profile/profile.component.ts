import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

public userData = [];


  constructor( private _userService: CrudService ) { }

  ngOnInit() {
     
     this._userService.getData()
       .subscribe(data => this.userData = data);

  }

   
  delete(id){
     this._userService.delete(id).subscribe(result => {
      console.log(result);
      
     });

  }
  



}
