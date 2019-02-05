import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public employee =[];

  public showData ="kiran teja";

  public messageChildData = "";


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
     this._employeeService.getData()
                          .subscribe(data => this.employee = data);
  }

}
