import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseType } from '../models/types';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseType<User[]>> {
    return this.httpClient.get<ResponseType<User[]>>("https://dummyjson.com/user")
  }
}
