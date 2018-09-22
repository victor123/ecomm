
//export type ItemColor = 'blue' | 'green' | 'gray';

export interface Item {
    id: any;
    images:Images;
    name: string;
    oldPrice: number;
    newPrice: number;
    discount:any;
    ratingsCount:any;
    ratingsValue:any;
    description:string;
    availibilityCount:any;
    quantity: number;
    color;
    size;
    weight:any;

  
  }

export class Images {
  small:any;
  medium:any;
  big:any
}