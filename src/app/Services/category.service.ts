
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl: string;

  constructor(private http: HttpClient) {
    this.categoryUrl = '/categories';
  }
  getCategoryList(): Observable<any> {

    return this.http.get(`${this.categoryUrl}`);
  }
}
