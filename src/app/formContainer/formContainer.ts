import { Component,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../service/productService';

@Component({
  selector: 'form-container',
  templateUrl: './formContainer.html'
 
})

export class FormContainer implements OnInit{
  
  transform(value:any,arg?:any[]):any {
    if(value) {
      var ArrayList = Object.keys(value);
      var drArry =[];
      ArrayList.forEach((key:any) => {
       drArry.push(value[key]);
      });

      return drArry;
    }

  }

 public formValue:any;
 product:any;
 myForm:FormGroup;
 constructor(private fb: FormBuilder, private _service:ProductService) {}

onSubmit(form) {
 this.formValue = form
 this.myForm.reset()
console.log(this.myForm)
}
close() {
    this.formValue = false;
}

fetchData() {
this._service.getData().subscribe(
  (data) => {
    this.product = data;
    console.log(this.product);
  }
 
)
}

ngOnInit() {
  this.myForm = this.fb.group({
    userName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    creditNumber: ['', [Validators.required,Validators.maxLength(20),Validators.pattern('^[0-9]*$')]],
    ExDate: ['', Validators.required]
});

this.fetchData()
}
}