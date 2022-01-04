import { createAction, props } from '@ngrx/store';
import { Author, Category } from './shared.model';

export const loadAuthors = createAction(
  '[Shared] Load Authors'
);

export const loadAuthorsSuccess = createAction(
  '[Shared] Load Authors Success',
  props<{ authors: Author[] }>()
);

export const loadAuthorsFailure = createAction(
  '[Shared] Load Authors Fail',
  props<{ error: string }>()
);

export const loadCategories = createAction(
  '[Shared] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Shared] Load Categories Success',
  props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Shared] Load Categories Fail',
  props<{ error: string }>()
);

export const updateAuthorSuccess = createAction(
  '[Author Edit] Update Success',
  props<{ author: Author }>()
);

export const deleteAuthorSuccess = createAction(
  '[Author List] Delete Success',
  props<{ id: number }>()
);
