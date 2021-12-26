import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Author } from './author.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private authorsUrl = 'api/authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // getBooks(): Observable<Result> {
  //   return this.http.get<Result>(this.booksUrl)
  //     .pipe(
  //       map((result) => {
  //         result.results.map((book) => {
  //           book.formats.imageSrc = book.formats['image/jpeg'];
  //           book.formats.textUrl = book.formats['text/html'];
  //         });

  //         return result;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

  // getBook(id: string): Observable<Book> {
  //   return this.http.get<Book>(`${this.booksUrl}/${id}`)
  //     .pipe(
  //       map((book) => {
  //         book.formats.imageSrc = book.formats['image/jpeg'];
  //         book.formats.textUrl = book.formats['text/html'];
  //         return book;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

  // getMoreBooks(url: string): Observable<Result> {
  //   return this.http.get<Result>(url)
  //     .pipe(
  //       map((result) => {
  //         result.results.map((book) => {
  //           book.formats.imageSrc = book.formats['image/jpeg'];
  //           book.formats.textUrl = book.formats['text/html'];
  //         });

  //         return result;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

  // searchBooks(books: Book[], searchString: string): Observable<Book[]> {
  //   const searchedBooks = books.filter(b => {
  //     const tsa = b.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
  //     return tsa;
  //   });
  //   return of(searchedBooks);
  // }

  // tslint:disable-next-line:typedef
  private handleError(err: any) {

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
