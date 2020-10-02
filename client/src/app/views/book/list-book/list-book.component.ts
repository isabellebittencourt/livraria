import { Book } from './../../../models/Book';
import { BookService } from './../../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {


  books: Book[] = [];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.list().subscribe((lista)=>{
      this.books = lista;
    })
  }

  /**Navegação  */
  navigateToCreateBook(){
   this.router.navigate(['book/create']);
  }
}
