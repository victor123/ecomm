import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/productService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productDetail:any;
loaderComponent:boolean = true;
  constructor(private _service:ProductService, private _route:ActivatedRoute) { }
 

  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        let id = params.get('id');
        this._service.detailPage(id).subscribe(
          data => {
            console.log(data)
         this.productDetail = data;
         this.loaderComponent = false;
          }
        )
      }
    )
  }

}
