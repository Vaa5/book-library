import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorState } from '../author.model';


// Selector functions
const getAuthorFeatureState = createFeatureSelector<AuthorState>('authors');

export const getBusyIndicator = createSelector(
  getAuthorFeatureState,
  state => state.loading
);

export const getAuthors = createSelector(
  getAuthorFeatureState,
  state => state.authors
);

// export const getSearchString = createSelector(
//   getBookFeatureState,
//   state => state.searchString
// );

// export const getSearchedBooks = createSelector(
//   getBookFeatureState,
//   state => state.searchedBooks
// );

// export const getshowBookCover = createSelector(
//   getBookFeatureState,
//   state => state.showBookCover
// );

// export const getSelectedBook = createSelector(
//   getBookFeatureState,
//   state => state.selectedBook
// );

// export const getNextBooksURL = createSelector(
//   getBookFeatureState,
//   state => state.next
// );

// export const getError = createSelector(
//   getBookFeatureState,
//   state => state.error
// );
