import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }
  addreview(customer:any){
    return this.http.post("http://localhost:3000/customer",customer);
  }
  getallreview(){
    return this.http.get<any[]>("http://localhost:3000/customer")
  }
}
