import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { AddCartService } from '../../../service/shoppingcart.service';
import { Subscription } from 'rxjs';
import { Item } from '../../model/productModel';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css']
})
export class CartContainerComponent implements OnInit {
  @Output() containerToggle:any = new EventEmitter<any>();
  @Input() cardItemContainer:any;
  @Input() sliderClass:any;
  public cartAction: Subscription;
  // @Input() productData:any =[];
  // @Input() Total;
  addCartItem:any[] =[];
  total:number = 0;
  constructor(private _cartService:AddCartService) {}
  
  goBack(data) {
    this.containerToggle.emit(data)
   }
   

//    productMinus(item:Item) {
//     if(item.quantity > 1) {
//     item.quantity -=1;
//     item.price = (item.quantity)*(item.price)
//     this._cartService.itemPlus(item).subscribe(
//       data => {       
//         console.log(data)
     
//       }
//   )
// }
  
//    }
//    productPlus(item:Item) {
//      item.quantity+= 1;
//     item.price = item.price*item.quantity;
//    this._cartService.itemPlus(item).subscribe(
//       data => {       
//         console.log(data)
   
//       }
//   )
  
//   }

   deleteCart(prd:any) {
     this._cartService.deleteItems(prd.id).subscribe(
     () => {
     let index = this.addCartItem.indexOf(prd);
     this.addCartItem.splice(index,1)
    })
   }

//    totalPrice(){
    
//       for(var i= 0; i < this.addCartItem.length; i++) {
//       let sum = (this.addCartItem[i].count)*(this.addCartItem[i].price);
//      this.total += sum;
    
//      }
//      console.log(this.total)
//    }

  ngOnInit() {      
   this._cartService.getCartItem().subscribe(
      (data) => {
        this.addCartItem = data

      }
    )
   
  }

}
