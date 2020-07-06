import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../Models/Category.model';
import {CategoryService} from '../Services/Category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent   {
  categories: Observable<Category>;
  constructor(private categoryService: CategoryService) {
    console.log('here');
    this.categoryService.getCategoryList().subscribe(data => {
      console.log('res = ' , data);
      this.categories = data;
      console.log('Pr: ', this.categories);
    });
  }

}
