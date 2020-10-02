import { Book } from './../models/Book';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:1234';
  constructor(private http: HttpClient) { }

  list():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseUrl);
  }
  create(book: Book):Observable<Book>{
    return this.http.post<Book>(this.baseUrl, book);
  }
}
