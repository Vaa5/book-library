import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, switchMap, withLatestFrom, filter, tap } from 'rxjs/operators';
import { from, of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AuthorService } from '../author.service';
import * as AuthorActions from './author.actions';
import { Store } from '@ngrx/store';
import { AuthorState } from '../author.model';
import * as SharedActions from 'src/app/shared/state/shared.actions';


@Injectable()
export class AuthorEffects {

  constructor(private actions$: Actions, private authorService: AuthorService, private store: Store<AuthorState>) { }

  loadAuthor$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthorActions.loadSelectedAuthor),
        mergeMap((action) => this.authorService.getAuthor(action.id)
          .pipe(
            map(author => AuthorActions.loadSelectedAuthorSuccess({ author })),
            catchError(error => of(AuthorActions.loadSelectedAuthorFailure({ error })))
          )
        )
      );
  });

  createAuthor$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthorActions.createAuthor),
        mergeMap((action) => this.authorService.createAuthor(action.author)
          .pipe(
            map(author => AuthorActions.createAuthorSuccess({ author })),
            catchError(error => of(AuthorActions.createAuthorFailure({ error })))
          )
        )
      );
  });

  updateAuthor$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthorActions.updateAuthor),
        mergeMap((action) => this.authorService.updateAuthor(action.author)
          .pipe(
            map(author => SharedActions.updateAuthorSuccess({ author })),
            catchError(error => of(AuthorActions.updateAuthorFailure({ error })))
          )
        )
      );
  });

  deleteAuthor$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AuthorActions.deleteAuthor),
        mergeMap((action) => this.authorService.deleteAuthor(action.id)
          .pipe(
            map(author => SharedActions.deleteAuthorSuccess({ id: action.id })),
            catchError(error => of(AuthorActions.deleteAuthorFailure({ error })))
          )
        )
      );
  });

}
