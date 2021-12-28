import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book, BookState } from '../book.model';

import * as BookActions from '../state/book.actions';
import { MatTableDataSource } from '@angular/material/table';
import { getBooks, getBusyIndicator } from '../state/book.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'bookName', 'bookPublishDate', 'bookPublisher', 'description'];
  dataSource: MatTableDataSource<Book>;


  books$ = this.store.select(getBooks).pipe(
    tap((books) => {
      console.log(books);
      this.dataSource = new MatTableDataSource<Book>(books);
    })
  );

  loading$ = this.store.select(getBusyIndicator);

  constructor(private store: Store<BookState>) { }

  ngOnInit(): void {
    this.store.dispatch(BookActions.loadBooks());
  }

  deleteBook(id: number): void {
    this.store.dispatch(BookActions.deleteBook({ id }));
  }

}
