import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-sort',
  templateUrl: './productssort.component.html',
  styleUrls: ['./productssort.component.css']
})
export class ProductssortComponent implements OnInit {
  sorter = ["Default","price-asc-rank",'price-desc-rank','review-rank']
  constructor() { }

  ngOnInit() {
  }

}
