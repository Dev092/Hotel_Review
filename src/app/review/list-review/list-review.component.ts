import { Component } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrl: './list-review.component.css'
})
export class ListReviewComponent {
  
  customer:any[]=[];
  constructor(private service:ReviewService){
    service.getallreview().subscribe(data=>{
      this.customer=data;
    })
  }

  

}
