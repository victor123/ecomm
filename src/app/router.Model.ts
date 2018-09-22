import { NgModule } from "@angular/core";
import { Routes,RouterModule, PreloadAllModules} from'@angular/router';
import { ErrorComponent } from "./error/error.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";


const router:Routes =
 [
     {path:'', component:ErrorComponent},
     {path:'product/:id', component:ProductDetailsComponent,
     data: {breadcrumb: "product/id"}
     },
     {path:'product', loadChildren:'./product-list/products.module#ShoppingModule',
     data: {breadcrumb: "product"}
     },
     {path:'forms', loadChildren:'./formContainer/form.module#FormComModule',
     data: {breadcrumb: "forms"}

     },
     {path: "",redirectTo: "/product",pathMatch: "full"}
 ]


@NgModule( {
    imports:[
        RouterModule.forRoot(router,{preloadingStrategy:PreloadAllModules})
     ],
     exports:[RouterModule]
})

export class RouterListModule {


}
