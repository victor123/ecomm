import {Injectable,EventEmitter} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Item } from "../app/model/productModel";
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ProductService  {
cartItem = new EventEmitter<Item>();

constructor(private _http:HttpClient){}
private url ='http://localhost:3000/products';
private addItem ='http://localhost:3000/addItem';
getData() {
    return this._http.get<Item[]>(this.url);
}

addItemToCard(item) {
    return this._http.post<Item[]>(this.addItem,item);

}
detailPage(id:any){
return this._http.get(this.url+'/'+id)

}
fetchData() {
    return this._http.get<Item[]>(this.addItem);
}

private getHeader(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers
}

}