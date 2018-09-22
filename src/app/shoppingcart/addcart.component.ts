import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ProductService } from '../../service/productService';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})

export class AddcartComponent implements OnInit {

  cardItemContainer: boolean = false;
  productData = [];
  cartTotal: number = 0;
  countItem:number = 0;
  sliderClass:any

  constructor(private _service: ProductService) { }

  showCartList() {
 // this.getSlider.emit(data)
   this.cardItemContainer = true;
   this.sliderClass = true
  }
  toggle() {
    this.cardItemContainer = false;
    }

  ngOnInit() {
    this._service.cartItem.subscribe(
      (data) => {
        
        var obj = this.productData;
        if (obj.length === 0) {
          data.count = 1;
          this.productData.push(data);

        } else {
          var repeat = false;
          for (var i in obj) {
            if (obj[i].name === data.name) {
              repeat = true;
              obj[i].count += 1;
            }
          }
          if (!repeat) {
            data.count = 1;
            obj.push(data)
         
          }
        }
       this.cartTotal += parseFloat(data.price);
        console.log(this.productData)
      }
    )
  }



}
