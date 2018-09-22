import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name:'sortpipe',
 pure:false
})

export class sortComponent implements PipeTransform {
    transform(values: Array<string>, args?: string): any {

        if(args==='ASC')
          values = values.sort();
          else
          values = values.sort().reverse();
          
          return values;
        }
}