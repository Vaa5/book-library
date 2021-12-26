import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, switchMap, withLatestFrom, filter, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthorService } from '../author.service';
import * as AuthorActions from './author.actions';
import { Store } from '@ngrx/store';
import { AuthorState } from '../author.model';


@Injectable()
export class AuthorEffects {

  constructor(private actions$: Actions, private authorService: AuthorService, private store: Store<AuthorState>) { }

  loadAuthors$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthorActions.loadAuthors),
        mergeMap(() => this.authorService.getAuthors()
          .pipe(
            map(authors => AuthorActions.loadAuthorsSuccess({ authors })),
            catchError(error => of(AuthorActions.loadAuthorsFailure({ error })))
          )
        )
      );
  });

  // loadMoreBooks$ = createEffect(() => {
  //   return this.actions$
  //     .pipe(
  //       ofType(BookActions.loadMoreBooks),
  //       withLatestFrom(this.store.select(getNextBooksURL).pipe(
  //         filter(url => !!url)
  //       )),
  //       mergeMap(([action, nextBookUrl]) => this.bookService.getMoreBooks(nextBookUrl)
  //         .pipe(
  //           map(result => BookActions.loadMoreBooksSuccess({ result })),
  //           catchError(error => of(BookActions.loadMoreBooksFailure({ error })))
  //         )
  //       )
  //     );
  // });

  // loadSelectedBook$ = createEffect(() => {
  //   return this.actions$
  //     .pipe(
  //       ofType(BookActions.loadSelectedBook),
  //       switchMap((action) => this.bookService.getBook(action.id)
  //         .pipe(
  //           map(selectedBook => BookActions.loadSelectedBookSuccess({ selectedBook })),
  //           catchError(error => of(BookActions.loadSelectedBookFailure({ error })))
  //         )
  //       )
  //     );
  // });

  // searchBooks$ = createEffect(() => {
  //   return this.actions$
  //     .pipe(
  //       ofType(BookActions.searchBooks),
  //       withLatestFrom(this.store.select(getBooks).pipe(
  //         filter(books => !!books.length)
  //       )),
  //       mergeMap(([action, books]) => {
  //         const searchedBooks = books.filter(b => {
  //           const tsa = b.title.toLocaleLowerCase().includes(action.searchString.toLocaleLowerCase());
  //           return tsa;
  //         });
  //         return of(searchedBooks);
  //       })
  //       , map((searchedBooks) => BookActions.searchBooksFinished({ searchedBooks }))

  //     );
  // });

  // // getSearchedBooks$ = createEffect(() => {
  // //   return this.actions$
  // //     .pipe(
  // //       ofType(BookActions.searchBook),
  // //       withLatestFrom(this.store.select(getBooks)),
  // //       switchMap(([action, books]) =>
  // //         of({ searchString: action.searchString, books })
  // //           .pipe(
  // //             // filter((param) => param.books.filter(b => b.title.includes(param.searchString))),
  // //             map((param) => {
  // //               const searchedBooks = param.searchString ?
  // //                 param.books.filter(book => {
  // //                   return book.title.toLowerCase().includes(param.searchString.toLowerCase());
  // //                 })
  // //                 : param.books;
  // //               return BookActions.searchBooksFinished({ searchedBooks, searchString: param.searchString });
  // //             }))
  // //       ));
  // // });

  // // getSearchedBooks$ = createEffect(() => {
  // //   return this.actions$
  // //     .pipe(
  // //       ofType(BookActions.searchBook),
  // //       withLatestFrom(this.store.select(getBooks)),
  // //       switchMap(([action, books]) =>
  // //         of({ searchString: action.searchString, books })
  // //           .pipe(
  // //             map((param) => {
  // //               const searchedBooks = param.searchString ?
  // //                 param.books.filter(book => {
  // //                   return book.title.toLowerCase().indexOf(param.searchString.toLowerCase()) === ;
  // //                 })
  // //                 : param.books;
  // //               return BookActions.searchBooksFinished({ searchedBooks, searchString: param.searchString });
  // //             }))
  // //       ));
  // // });

}
