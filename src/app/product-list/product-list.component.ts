import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/productService';
import { Item } from '../model/productModel';
import { localStorageService } from '../../service/localStorage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCartService } from '../../service/shoppingcart.service';
import { ToastrService } from 'ngx-toastr';
import { IProductPriceLimit } from '../model/productFilterInterface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  loaderComponent: boolean = true;
  productData: Item[] = [];
  filterProduct: Item[] = [];
  category: string;
  starsCount: number[] = [];
  sorter = ["Relevance", "low to high", 'high to low']
  minPrice: number;
  maxPrice: number;
  clicked = "col-md-3"



  constructor(
    private toastr: ToastrService,
    private router: Router,
    private _service: ProductService,
    private _cartservice: AddCartService,
    private _localService: localStorageService,
    private route: ActivatedRoute) {
  }

  handleError(error) {

    console.log(error);
  }

  getProductData() {
    this._service.getData().subscribe(
      (data) => {

        this.productData = data;
        this.loaderComponent = false;
        this.productData.forEach((item, key) => {
          let count = this.productData[key].ratingsCount;
          let value = this.productData[key].ratingsValue
          let result = 5 * (value / count) / 100;
          let rate = parseFloat(result.toFixed(1))
          this.starsCount.push(rate);

        })

        this.route.queryParamMap.subscribe(params => {
          this.category = params.get('category');
          this.filterProduct = (this.category) ?
            this.productData.filter(p => p.name === this.category) :
            this.productData;
        })

      }
    )

  }

  filterPrice(filter: IProductPriceLimit) {
    this.minPrice = filter.priceMin;
    this.maxPrice = filter.priceMax
  }


  sortproduct(event) {
    let data = event.target.value
    if (data === "low to high") {
      this.productData = this.filterProduct.sort(function (a, b) {
        return a.newPrice - b.newPrice
      })
    }
    else if (data === "high to low") {
      this.productData = this.filterProduct.sort(function (a, b) {
        return b.newPrice - a.newPrice
      })
    } else {
      this.getProductData()
    }
  }

  detailPage(product) {
    this.router.navigate(['/product', product.id],{
      queryParams:{'product':product.name}
    })
  }

  addCartProduct(item) {
    console.log(item)
  }

  clearRange(data) {
    this.minPrice = data.min
    this.maxPrice = data.max
  }

  ngOnInit() {
    this.getProductData();
  }





}
