import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './selectbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'selectbox';
  public employee = [];

constructor(private _employeeService: EmployeeService){}

ngOnInit(){
   this._employeeService.getData()
       .subscribe(data => this.employee = data);

   this._employeeService.postrequest()
       .subscribe(
          (data: any) => {
            console.log(data);
          }
       );
}



}
