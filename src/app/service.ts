/**
 * Created by 翁锦程 on 2017/2/17.
 */
import {Injectable} from '@angular/core';
import { Http }from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Name } from './name'

@Injectable()
export class UserService {
  constructor(public http:Http) {}

  getNames(): Promise<Name[]> {
    return this.http.get('app/names.json')
      .toPromise()
      .then(response => response.json().data as Name[])
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
