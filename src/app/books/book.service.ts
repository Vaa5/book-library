import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'api/books';


  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBook(id: number): Observable<Book> {
    if (id === 0) {
      return of(this.initializeBook());
    }
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Book Id must be null for the Web API to assign an Id
    const newBook = { ...book, id: null };
    return this.http.post<Book>(this.booksUrl, newBook, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteBook(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put<Book>(url, book, { headers })
      .pipe(
        // Return the product on an update
        map(() => book),
        catchError(this.handleError)
      );
  }


  private initializeBook(): Book {
    // Return an initialized object
    return {
      id: 0,
      title: '',
      description: '',
      bookPublisher: '',
      bookPublishDate: null,
      authors: [],
      categories: [],
      languages: []
    };
  }


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
