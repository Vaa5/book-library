/* NgRx */
import { createReducer, on } from '@ngrx/store';
import * as SharedActions from 'src/app/shared/state/shared.actions';
import { BookState } from '../book.model';
import * as BookActions from './book.actions';


const initialState: BookState = {
  books: [],
  selectedBook: null,
  loading: false,
  error: '',
};


export const BookReducer = createReducer<BookState>(
  initialState,
  on(BookActions.loadBooks, (state, action): BookState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(BookActions.loadBooksSuccess, (state, action): BookState => {
    return {
      ...state,
      books: action.books,
      loading: false,
      error: ''
    };
  }),
  on(BookActions.loadBooksFailure, (state, action): BookState => {
    return {
      ...state,
      books: [],
      loading: false,
      error: action.error
    };
  }),
  on(BookActions.loadSelectedBook, (state, action): BookState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(BookActions.loadSelectedBookSuccess, (state, action): BookState => {
    return {
      ...state,
      selectedBook: action.book,
      loading: false,
      error: ''
    };
  }),
  on(BookActions.loadSelectedBookFailure, (state, action): BookState => {
    return {
      ...state,
      selectedBook: null,
      loading: false,
      error: action.error
    };
  }),
  on(BookActions.createBook, (state, action): BookState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(BookActions.createBookSuccess, (state, action): BookState => {
    return {
      ...state,
      selectedBook: action.book,
      books: [...state.books, action.book],
      loading: false,
      error: ''
    };
  }),
  on(BookActions.createBookFailure, (state, action): BookState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),
  on(BookActions.updateBook, (state, action): BookState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(BookActions.updateBookSuccess, (state, action): BookState => {
    const updatedBooks = state.books.map(
      a => action.book.id === a.id ? action.book : a);
    return {
      ...state,
      books: updatedBooks,
      loading: false,
      error: ''
    };
  }),
  on(BookActions.updateBookFailure, (state, action): BookState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),
  on(BookActions.deleteBook, (state, action): BookState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(BookActions.deleteBookSuccess, (state, action): BookState => {
    return {
      ...state,
      books: state.books.filter(book => book.id !== action.id),
      loading: false,
      error: ''
    };
  }),
  on(BookActions.deleteBookFailure, (state, action): BookState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  })
);
