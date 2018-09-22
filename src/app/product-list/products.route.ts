import {NgModule} from '@angular/core';
import { Routes,RouterModule} from'@angular/router';
import { ProductListComponent } from './product-list.component';
//import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

const route:Routes = [
    {path:'',component:ProductListComponent, children: [
    {path:'product', component:ProductListComponent}]}
]

@NgModule({
 //declarations:[BreadcrumbComponent],
 imports:[RouterModule.forChild(route)],
 exports:[RouterModule]

})

export class ShoppinRouter {


}
