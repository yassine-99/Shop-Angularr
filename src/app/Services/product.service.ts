import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string;

  constructor(private http: HttpClient) {
    this.productUrl = '/products';
  }
  getProductList(): Observable<any> {
    console.log('1');
    return this.http.get(`${this.productUrl}`);
  }
}
