import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, switchMap, withLatestFrom, filter, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BookService } from '../book.service';
import * as BookActions from './book.actions';
import { Store } from '@ngrx/store';
import { BookState } from '../book.model';


@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService, private store: Store<BookState>) { }

  loadBooks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.loadBooks),
        mergeMap(() => this.bookService.getBooks()
          .pipe(
            map(books => BookActions.loadBooksSuccess({ books })),
            catchError(error => of(BookActions.loadBooksFailure({ error })))
          )
        )
      );
  });

  loadBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.loadSelectedBook),
        mergeMap((action) => this.bookService.getBook(action.id)
          .pipe(
            map(book => BookActions.loadSelectedBookSuccess({ book })),
            catchError(error => of(BookActions.loadSelectedBookFailure({ error })))
          )
        )
      );
  });

  createBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.createBook),
        mergeMap((action) => this.bookService.createBook(action.book)
          .pipe(
            map(book => BookActions.createBookSuccess({ book })),
            catchError(error => of(BookActions.createBookFailure({ error })))
          )
        )
      );
  });

  updateBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.updateBook),
        mergeMap((action) => this.bookService.updateBook(action.book)
          .pipe(
            map(book => BookActions.updateBookSuccess({ book })),
            catchError(error => of(BookActions.updateBookFailure({ error })))
          )
        )
      );
  });

  deleteBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookActions.deleteBook),
        mergeMap((action) => this.bookService.deleteBook(action.id)
          .pipe(
            map(book => BookActions.deleteBookSuccess({ id: action.id })),
            catchError(error => of(BookActions.deleteBookFailure({ error })))
          )
        )
      );
  });

}
