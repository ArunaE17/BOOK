import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
   url='http://localhost:3000/Books';
   /*url='http://localhost:8080/book';*/
  constructor(private http:HttpClient) { }
  getBooksInfo()
  {
      return this.http.get(this.url);
  }
}
