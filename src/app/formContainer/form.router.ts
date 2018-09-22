import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { FormContainer } from './formContainer';

const router:Routes = [
    {path: '', component:FormContainer }
]

@NgModule({
 declarations:[],
 imports:[RouterModule.forChild(router)]
})

export class FormRouter {}
