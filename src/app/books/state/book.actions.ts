import { createAction, props } from '@ngrx/store';
import { Book } from '../book.model';

export const loadBooks = createAction(
  '[Book List] Load'
);

export const loadBooksSuccess = createAction(
  '[Book List] Load Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book List] Load Fail',
  props<{ error: string }>()
);

export const deleteBook = createAction(
  '[Book List] Delete',
  props<{ id: number }>()
);

export const deleteBookSuccess = createAction(
  '[Book List] Delete Success',
  props<{ id: number }>()
);

export const deleteBookFailure = createAction(
  '[Book List] Delete Fail',
  props<{ error: string }>()
);

export const loadSelectedBook = createAction(
  '[Book Edit] Load',
  props<{ id: number }>()
);

export const loadSelectedBookSuccess = createAction(
  '[Book Edit] Load Success',
  props<{ book: Book }>()
);

export const loadSelectedBookFailure = createAction(
  '[Book Edit] Load Fail',
  props<{ error: string }>()
);

export const createBook = createAction(
  '[Book Edit] Create',
  props<{ book: Book }>()
);

export const createBookSuccess = createAction(
  '[Book Edit] Create Success',
  props<{ book: Book }>()
);

export const createBookFailure = createAction(
  '[Book Edit] Create Fail',
  props<{ error: string }>()
);

export const updateBook = createAction(
  '[Book Edit] Update',
  props<{ book: Book }>()
);

export const updateBookSuccess = createAction(
  '[Book Edit] Update Success',
  props<{ book: Book }>()
);

export const updateBookFailure = createAction(
  '[Book Edit] Update Fail',
  props<{ error: string }>()
);
