import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddReviewComponent } from './add-review/add-review.component';
import { ListReviewComponent } from './list-review/list-review.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from './review.service';



@NgModule({
  declarations: [
    AddReviewComponent,
    ListReviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[AddReviewComponent,ListReviewComponent],
  providers:[ReviewService]
})
export class ReviewModule { }
