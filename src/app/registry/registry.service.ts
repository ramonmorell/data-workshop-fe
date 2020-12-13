import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from '../constants/endpoints';
import { IUser } from '../interfaces/index';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private httpClient: HttpClient) { }

  public addUser = (values) => {
    const payLoad: IUser = {
      name: values.userName,
      password:  bcrypt.hashSync(values.userPassword, 10),
      email: values.userEmail,
      country: values.userCountry,
    };
    return this.httpClient.post(EndPoints.postUser, payLoad);
  }
}
