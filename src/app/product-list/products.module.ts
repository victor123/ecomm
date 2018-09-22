import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from "ngx-rating";

//import { ShoppinRouter,shoppingComponent } from './shopping.route';
import { ProductListComponent } from './product-list.component';
import { ShoppinRouter } from './products.route';
import { ShareModule } from '../shared/sharedModule';

import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductssortComponent } from './productssort/productssort.component';

@NgModule({
    declarations:[ProductListComponent, ProductFilterComponent, ProductssortComponent],    
    imports:[CommonModule,FormsModule,ReactiveFormsModule,ShoppinRouter,ShareModule,RatingModule],
    
   
})

export class ShoppingModule {}

