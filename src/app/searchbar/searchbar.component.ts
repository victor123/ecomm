import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/searchbar.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  list:any[]=[]
  subItem:any=[]
  constructor(private _service:SearchService) { }
  
searchList() {
  this._service.serachData().subscribe(
    data => {

   this.list = data;
   this.subItem = data[0].SubCategory;

    }
  )
}

data:any
menuList(event) {
  let id = event.target.value;
  // this.list.forEach((item)=> {
  
  //  console.log(item.id)
  
  // })
  console.log(id)
}

  ngOnInit() {
    this.searchList()
  }

}
