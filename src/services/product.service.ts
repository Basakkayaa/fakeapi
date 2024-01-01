import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseType } from '../models/types';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ResponseType<Product[]>> {
    return this.httpClient.get<ResponseType<Product[]>>("https://dummyjson.com/products")
  }
}
