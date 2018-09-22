import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchBar } from "../app/model/productFilterInterface";

@Injectable()

export class SearchService {
   private url = 'assets/category.json';

constructor(private _http: HttpClient) {

}

serachData() {
    return this._http.get<SearchBar[]>(this.url);
}


}