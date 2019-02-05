import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public employee = [];

  //@Input() public parentData;

  @Input('parentData') public showData;

  @Output() public childData = new EventEmitter();


  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this._employeeService.getData()
                        .subscribe(data => this.employee = data);
  }

  getChildData(){
     this.childData.emit("teja kiran");
  }

}
