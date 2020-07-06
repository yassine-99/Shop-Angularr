import { Component, OnInit } from '@angular/core';
import {Product} from '../Models/Product.model';
import {ProductService} from '../Services/Product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent   {
  products: Observable<Product[]>;
    constructor(private productService: ProductService) {
      console.log('here');
      this.productService.getProductList().subscribe(data => {
      console.log('res = ' , data);
      this.products = data;
      console.log('Pr: ', this.products);
    });
  }
}
