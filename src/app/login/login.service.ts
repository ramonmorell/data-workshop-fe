import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EndPoints } from '../constants/endpoints';
// import * as bcrypt from 'bcryptjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public authenticateUser = (values) => {
    const payload = new HttpParams()
      .set('username', values.userName)
      // .set('password', bcrypt.hashSync(values.userPassword, 10),) // TPODO Encrypt
      .set('password', values.userPassword)
      .set('grant_type', "password");
    return this.httpClient.post(EndPoints.authenticate, payload,  {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}
