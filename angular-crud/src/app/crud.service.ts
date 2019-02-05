import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{ DataInterface } from './data.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

private _url: string = 'http://localhost:3000/notes';

  constructor(private http:HttpClient) { }


  register(body:any){
    return this.http.post('http://localhost:3000/notes', body, {
      observe:'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  delete(body:any){
    return this.http.delete('http://localhost:3000/notes/:id', {
       observe:'body',
      headers: new HttpHeaders().append('Content-Type','application/json')
    });
  }

  getData(): Observable<DataInterface[]>{
        return this.http.get<DataInterface[]>(this._url);
    }

    


}
