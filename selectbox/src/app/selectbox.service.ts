import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpHeaders} from '@angular/common/http';

@Injectable()

export class EmployeeService{

   private _url: string = 'https://stagingapi.trasers.com/api_trasers/trasers_reg_menu_details';

    constructor( private http: HttpClient){}
    
    getData(): Observable<IEmployee[]>{
        return this.http.get<IEmployee[]>(this._url);
    }

    postrequest(): Observable<IEmployee[]>{
         return this.http.post<IEmployee[]>("https://stagingapi.trasers.com/api_trasers/user/login", 
         {
            "username":"",
            "password":""
         });
   }

}