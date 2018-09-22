import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'priceFilter'
})

export class PriceFilter implements PipeTransform {
    transform(value:any, minPrice:number | undefined,maxPrice:number | undefined) {
        let filter_list = value;
        if(minPrice) {
            filter_list = filter_list.filter(_item => {
                return _item.newPrice >= +minPrice;
              });
        }
        if (maxPrice) {
            filter_list = filter_list.filter(_item => {
              return _item.newPrice <= +maxPrice;
            });
          }
          return  filter_list;
    }
}