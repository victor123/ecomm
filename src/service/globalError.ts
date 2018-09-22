import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { Router } from '@angular/router';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()

export class GlobalError implements ErrorHandler {

    constructor(private inject: Injector) { }

    handleError(error:any) {
        const router = this.inject.get(Router);
        console.log(`Router Url : ${router.url}`);
        if (error instanceof HttpErrorResponse) {
            if(error.status === 404) {
             alert(" URL NOT FOUND")
            //console.error(error.message);
            }
        } else {
            console.error(error.message);
        }


        router.navigate(['error']);
    }


}
