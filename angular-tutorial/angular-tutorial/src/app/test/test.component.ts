import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

//@Input() public parentData;
@Input('parentData') public name;

public truthyValue = false;

public color ="orange";

public colors = ["red", "green", "blue", "orange"]

  constructor() { }

  ngOnInit() {
  }

  onClick(){
     this.truthyValue = true;
  }
  

}
