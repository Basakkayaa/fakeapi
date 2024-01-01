import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';
import { ResponseType } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseType<Quote[]>> {
    return this.httpClient.get<ResponseType<Quote[]>>("https://dummyjson.com/quotes")
  }

}
