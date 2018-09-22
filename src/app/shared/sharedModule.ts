import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterPipe } from './filterPipe';
import { ConvertArray } from "./convertArray";
import { sortComponent } from "./sortPipe";
import { LoaderComponent } from "./loader";
import { PriceFilter } from "./price-filter";



@NgModule({
    declarations:[
        FilterPipe,
        ConvertArray,
        sortComponent,
        LoaderComponent,
        PriceFilter
    ],
    exports:[
        FilterPipe,
        ConvertArray,
        sortComponent,
        LoaderComponent,
        PriceFilter
    ],
    imports:[CommonModule],
   
})

export class ShareModule {

}