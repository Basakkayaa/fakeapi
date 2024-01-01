import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/types';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<ResponseType<Todo[]>> {
    return this.httpClient.get<ResponseType<Todo[]>>("https://dummyjson.com/todos")
  }


}
