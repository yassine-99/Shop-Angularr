import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {CategoryListComponent} from './category-list/category-list.component';


let routes: Routes;
routes = [
  {path: 'categories', component: CategoryListComponent},
  {path: 'products', component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
