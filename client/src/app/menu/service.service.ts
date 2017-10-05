import { Injectable } from '@angular/core';

import { Http, Response } from '@angular//http';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceService {

  constructor(private http:Http){
  }
  post(body, api): Observable<Response>{
    return this.http.post('http://localhost:3000/add', {nome: 'teste'})
  }

  get(api): Observable<Response> {
    return this.http.get(api)
  }

}
