import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name:'key',
 pure: false
})

export class ConvertArray implements PipeTransform {

     transform(value:any, arg?:any[] ) {

        if(value) {
            let arrKey:any[]= Object.keys(value),
            dataArr = [];
            arrKey.forEach((key)=> {
                dataArr.push(value[key])
            });
            return dataArr;
        }
 
     }
}