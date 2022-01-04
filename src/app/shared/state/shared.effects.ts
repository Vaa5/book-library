import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as sharedActions from './shared.actions';
import { SharedService } from '../shared.service';


@Injectable()
export class SharedEffects {
  constructor(private actions$: Actions, private authorService: SharedService) { }

  loadAuthors$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(sharedActions.loadAuthors),
        mergeMap(() => this.authorService.getAuthors()
          .pipe(
            map(authors => sharedActions.loadAuthorsSuccess({ authors })),
            catchError(error => of(sharedActions.loadAuthorsFailure({ error })))
          )
        )
      );
  });

  loadCategories$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(sharedActions.loadCategories),
        mergeMap(() => this.authorService.getCategories()
          .pipe(
            map(categories => sharedActions.loadCategoriesSuccess({ categories })),
            catchError(error => of(sharedActions.loadCategoriesFailure({ error })))
          )
        )
      );
  });

}
