import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { Author, Category } from './state/shared.model';


@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private authorsUrl = 'api/authors';
  private categoriesUrl = 'api/categories';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsUrl)
      .pipe(
        // delay(2000),
        catchError(this.handleError)
      );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError)
      );
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
