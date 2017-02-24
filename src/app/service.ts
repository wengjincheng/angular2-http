/**
 * Created by 翁锦程 on 2017/2/17.
 */
import {Injectable} from '@angular/core';
import {Http, Headers}from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Name } from './name'

@Injectable()
export class UserService {
  constructor(public http:Http) {}
  private url = 'http://localhost:3000/api/products/p-1487904914494';
  private headers = new Headers({'Content-Type':'application/json'});
  getNames(): Promise<Name[]> {
    return this.http.get(this.url,{headers: this.headers})
      .toPromise()
      .then(response => response.json().code as Name[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
