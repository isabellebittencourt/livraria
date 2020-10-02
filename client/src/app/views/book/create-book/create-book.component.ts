import { Book } from './../../../models/Book';
import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book = {
  };
  constructor(private service: BookService) { }

  ngOnInit(): void {
  }

  create():void{
    console.log("teste");
    this.service.create(this.book).subscribe((book)=>{
      console.log(book);
    })
  }
}
