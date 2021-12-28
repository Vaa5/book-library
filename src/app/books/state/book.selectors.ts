import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../book.model';


// Selector functions
const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBusyIndicator = createSelector(
  getBookFeatureState,
  state => state.loading
);

export const getBooks = createSelector(
  getBookFeatureState,
  state => state.books
);

export const getSelectedBook = createSelector(
  getBookFeatureState,
  state => state.selectedBook
);


export const getError = createSelector(
  getBookFeatureState,
  state => state.error
);
