import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { from, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { Author } from '../shared/state/shared.model';


@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private authorsUrl = 'api/authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
        delay(1000),
        catchError(this.handleError)
      );
  }

  getAuthor(id: number): Observable<Author> {
    if (id === 0) {
      return of(this.initializeAuthor());
    }
    const url = `${this.authorsUrl}/${id}`;
    return this.http.get<Author>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  createAuthor(author: Author): Observable<Author> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Author Id must be null for the Web API to assign an Id
    const newAuthor = { ...author, id: null };
    return this.http.post<Author>(this.authorsUrl, newAuthor, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAuthor(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.authorsUrl}/${id}`;
    return this.http.delete<Author>(url, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateAuthor(author: Author): Observable<Author> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.authorsUrl}/${author.id}`;
    return this.http.put<Author>(url, author, { headers })
      .pipe(
        // Return the product on an update
        map(() => author),
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

  private initializeAuthor(): Author {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      dateOfBirth: null,
      description: null
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
