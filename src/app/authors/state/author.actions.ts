import { createAction, props } from '@ngrx/store';
import { Author } from '../author.model';

export const loadAuthors = createAction(
  '[Author List] Load'
);

export const loadAuthorsSuccess = createAction(
  '[Author List] Load Success',
  props<{ authors: Author[] }>()
);

export const loadAuthorsFailure = createAction(
  '[Author List] Load Fail',
  props<{ error: string }>()
);





// export const toggleBookCoverVisibility = createAction(
//   '[Book List] Toggle Book Cover Visibility'
// );

// export const searchBooks = createAction(
//   '[Book List] Search Book',
//   props<{ searchString: string }>()
// );

// export const searchBooksFinished = createAction(
//   '[Book List] Search Book Finished',
//   props<{ searchedBooks: Book[] }>()
// );

// export const loadSelectedBook = createAction(
//   '[Book Detail] load Selected Book',
//   props<{ id: string }>()
// );

// export const loadSelectedBookSuccess = createAction(
//   '[Book Detail] load Selected Book Success',
//   props<{ selectedBook: Book }>()
// );

// export const loadSelectedBookFailure = createAction(
//   '[Book Detail] load Selected Book Fail',
//   props<{ error: string }>()
// );

// export const loadMoreBooks = createAction(
//   '[Book List] load More Books'
// );

// export const loadMoreBooksSuccess = createAction(
//   '[Book List] load More Books Success',
//   props<{ result: Result }>()
// );

// export const loadMoreBooksFailure = createAction(
//   '[Book List] load More Books Fail',
//   props<{ error: string }>()
// );
