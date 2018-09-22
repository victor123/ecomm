import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../service/productService';
import { IProductPriceLimit } from '../../model/productFilterInterface';



@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  @Output() filterprice: EventEmitter<IProductPriceLimit> = new EventEmitter<IProductPriceLimit>();
  @Output() clearRange: EventEmitter<any> = new EventEmitter<any>();

  rating = ['4 above', '4 bellow',]
  @Input('category') category;
  minPrice: number = 0;
  maxPrice: number = 0;

  FilterproductData: any;
  constructor(private _service: ProductService) { }


  submitPrice() {
    this.filterprice.emit({
      priceMin: this.minPrice || null,
      priceMax: this.maxPrice || null
    })
  }

  removeDuplicate(data) {
    return data.filter(function (item, index, arr) {
      const result = arr.map(item => item.name);
      return index === result.indexOf(item.name)
    })
  }

  clearAll(){
   this.clearRange.emit( {
     min: null,
     max: null,
   })
  }
  
loadData() {
  this._service.getData().subscribe(
    data => {
      this.FilterproductData = this.removeDuplicate(data);

    }
  )
}

  ngOnInit() {
 this.loadData()
  }

}
