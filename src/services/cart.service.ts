import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/types';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseType<Cart[]>> {
    return this.httpClient.get<ResponseType<Cart[]>>("https://dummyjson.com/carts")
  }
}
