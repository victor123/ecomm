import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormContainer } from './formContainer';
import { FormRouter } from './form.router';
// import { MatNativeDateModule } from '@angular/material';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { MatDatepickerModule} from '@angular/material/datepicker';
// import { MatInputModule} from '@angular/material/input';



@NgModule({
    declarations:[FormContainer],
    imports:[CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormRouter
       ]
    })

export class FormComModule {

}