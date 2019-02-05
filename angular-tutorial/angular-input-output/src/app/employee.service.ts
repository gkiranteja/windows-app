import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInterface } from './employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private _httpClient: HttpClient) { }

  // getData(){
  //   return [
  //      { 
  //        "name": "kiran",
  //        "age": 26,
  //        "designation": "ui"
  //       },
  //       { 
  //        "name": "sai",
  //        "age": 30,
  //        "designation": "drupal-1"
  //       },
  //       { 
  //        "name": "ravi",
  //        "age": 28,
  //        "designation": "drupal-2"
  //       },
  //       { 
  //        "name": "subbu",
  //        "age": 30,
  //        "designation": "drupal-3"
  //       }
  //   ];
  // }


getData(): Observable<EmployeeInterface[]>{
  return this._httpClient.get<EmployeeInterface[]>(this._url);
}


  
}
