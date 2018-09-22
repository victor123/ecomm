import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderForm } from './headerForm/headForm';
import { AddcartComponent } from './shoppingcart/addcart.component';
import { ProductService } from '../service/productService';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { CartContainerComponent } from './shoppingcart/cart-container/cart-container.component';

import { RouterListModule } from './router.Model';
import { localStorageService } from '../service/localStorage.service';
import { FormComModule } from './formContainer/form.module';
import { ErrorComponent } from './error/error.component';
import { ShareModule } from './shared/sharedModule';
import { AddCartService } from '../service/shoppingcart.service';
import { ToastrModule } from 'ngx-toastr';
import { ProductDetailsComponent } from './product-details/product-details.component';
// import { BreadcrumbsService } from '../service/breadcrumb.service';
//import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbsModule } from './breadcrumb/breadcrumb.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchService } from '../service/searchbar.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderForm,
   AddcartComponent,
   NavComponent,
   CartContainerComponent,
  ErrorComponent,
  ProductDetailsComponent,
  SearchbarComponent
  //BreadcrumbComponent

    
        
  ],
  imports: [
    BrowserModule,
    RouterListModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    BreadcrumbsModule,
   
    HttpClientModule,
    FormComModule,
    ShareModule,
    ToastrModule.forRoot()
    
  ],
  providers: [ProductService,localStorageService,AddCartService,SearchService
  //  {provide:ErrorHandler,useClass:GlobalError}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
