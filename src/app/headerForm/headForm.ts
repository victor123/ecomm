import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'head-form',
  templateUrl: './headForm.html',
  
})
export class HeaderForm implements OnInit {

 public todayDate:any = new Date;
 public location:string ='Blue Cinema';

constructor() {}

ngOnInit() {

}

}
