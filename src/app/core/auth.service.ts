import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { OnInit} from '@angular/core';

@Injectable()
export class AuthService implements OnInit {
  private hostname = 'http://localhost:8000/api';
  private sessionUrl= this.hostname + '/newSession';
  private sessionDetailUrl = this.hostname + '/sessionDetail';
  private isLoggedIn = false;
  private session_key= 'none';
  private username= 'nobody';
  logginInfo= new Subject<boolean>();

  constructor (private http: Http) {}

  ngOnInit () {
    this.logginInfo.next(false);
}

  private dealRes( res: Response): string {
    this.session_key = res.json().session_key;
    this.username = res.json().username;
    this.isLoggedIn = true;
    console.log(this);
    this.logginInfo.next(true);
    return 'success';
  }

  private handleError (error: Response | any) {
    console.log('reject');
    return Promise.reject('error');
  }

  login(username: string, password: string): Promise<string> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.sessionUrl, {'username': username, 'password': password}, options)
      .toPromise()
      .then((res: Response) => this.dealRes(res), this.handleError);
  }

  logout(): Promise<string> {
    return this.http.delete(this.sessionDetailUrl + '/' + this.session_key)
      .toPromise()
      .then(() => {
        this.isLoggedIn = false;
        this.username = 'nobody';
        this.session_key = 'none';
        this.logginInfo.next(false);
        return 'success';
      });
  }

  getSessionKey (): string {
    return this.session_key;
  }

  getUserName (): string {
    return this.username;
  }

}

