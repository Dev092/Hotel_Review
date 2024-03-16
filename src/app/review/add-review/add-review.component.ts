import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'] 
})
export class AddReviewComponent {
//   imageUrl?: string | ArrayBuffer;
//  // constructor() { }

//   onFileSelected(event: any): void {
//     const file: File = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         this.imageUrl = reader.result as string;
//       };
//     } else {
//       this.imageUrl = ""; // Clear the image preview if no file is selected
//     }
//   }


  constructor(private service: ReviewService) {}

  addHandler(customerForm: NgForm) {
    const customerId = customerForm.value.id;
    const authorizedIds = [101,102,103,104,105,106]; 

    if (!authorizedIds.includes(customerId)) {
      alert("You are not authorized.");
      return;
    }

    this.service.addreview(customerForm.value).subscribe(data => {
      alert("Review Added Successfully");
    });
    customerForm.resetForm();
  }
}
