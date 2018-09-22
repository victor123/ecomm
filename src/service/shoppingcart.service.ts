import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { Item } from '../app/model/productModel';
import {map,take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

 
@Injectable()

export class AddCartService  {
     private addItem = 'http://localhost:3000/addItem';
 selectProduct:Subject<any> = new Subject();
  cast = this.selectProduct.asObservable();
    constructor(private _http: HttpClient,
      private toast:ToastrService) { }

// shareData(data) {
// this.selectProduct.next(data);
// }

addCartItems(){
  let item = {
    dateCreated: new Date().getTime()
  }
return this._http.post(this.addItem,item)
}

itemPlus(item) {
 return this._http.put<Item[]>(this.addItem+'/'+item.id,item);
}

deleteItems(item:any){
  return this._http.delete(this.addItem+'/'+item)
} 


getCartItem() {
  return this._http.get<Item[]>(this.addItem);
}




}