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

  displayedColumns: string[] = ['actions', 'title', 'bookPublishDate', 'bookPublisher', 'description'];
  dataSource: MatTableDataSource<Book>;


  books$ = this.bookStore.select(getBooks).pipe(
    tap((books) => {
      this.dataSource = new MatTableDataSource<Book>(books);
    })
  );

  loading$ = this.bookStore.select(getBusyIndicator);

  constructor(private bookStore: Store<BookState>) { }

  ngOnInit(): void {
    this.bookStore.dispatch(BookActions.loadBooks());
  }

  deleteBook(id: number): void {
    this.bookStore.dispatch(BookActions.deleteBook({ id }));
  }

}
