import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { BreadcrumbsService } from "../../service/breadcrumb.service";


@NgModule({

    declarations: [
      BreadcrumbComponent
    ],
    providers: [
       BreadcrumbsService
    ],
    imports: [
        RouterModule,
        BrowserModule,
        CommonModule
    ],
    exports: [BreadcrumbComponent]
})
export class BreadcrumbsModule {
    constructor() {}

}