import { Component, OnInit } from '@angular/core';
import {Book} from "../../models/Book.model";
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss']
})
export class SinglebookComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
