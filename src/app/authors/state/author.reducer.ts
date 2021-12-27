
/* NgRx */
import { createReducer, on } from '@ngrx/store';
import { AuthorState } from '../author.model';
import * as AuthorActions from './author.actions';


const initialState: AuthorState = {
  authors: [],
  selectedAuthor: null,
  loading: false,
  error: '',
};

export const AuthorReducer = createReducer<AuthorState>(
  initialState,
  on(AuthorActions.loadAuthors, (state, action): AuthorState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(AuthorActions.loadAuthorsSuccess, (state, action): AuthorState => {
    return {
      ...state,
      authors: action.authors,
      loading: false,
      error: ''
    };
  }),
  on(AuthorActions.loadAuthorsFailure, (state, action): AuthorState => {
    return {
      ...state,
      authors: [],
      loading: false,
      error: action.error
    };
  }),
  on(AuthorActions.loadSelectedAuthor, (state, action): AuthorState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(AuthorActions.loadSelectedAuthorSuccess, (state, action): AuthorState => {
    return {
      ...state,
      selectedAuthor: action.author,
      loading: false,
      error: ''
    };
  }),
  on(AuthorActions.loadSelectedAuthorFailure, (state, action): AuthorState => {
    return {
      ...state,
      selectedAuthor: null,
      loading: false,
      error: action.error
    };
  }),
  on(AuthorActions.createAuthor, (state, action): AuthorState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(AuthorActions.createAuthorSuccess, (state, action): AuthorState => {
    return {
      ...state,
      selectedAuthor: action.author,
      authors: [...state.authors, action.author],
      loading: false,
      error: ''
    };
  }),
  on(AuthorActions.createAuthorFailure, (state, action): AuthorState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),
  on(AuthorActions.updateAuthor, (state, action): AuthorState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(AuthorActions.updateAuthorSuccess, (state, action): AuthorState => {
    const updatedAuthors = state.authors.map(
      a => action.author.id === a.id ? action.author : a);
    return {
      ...state,
      authors: updatedAuthors,
      loading: false,
      error: ''
    };
  }),
  on(AuthorActions.updateAuthorFailure, (state, action): AuthorState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }),
  on(AuthorActions.deleteAuthor, (state, action): AuthorState => {
    return {
      ...state,
      loading: true
    };
  }),
  on(AuthorActions.deleteAuthorSuccess, (state, action): AuthorState => {
    return {
      ...state,
      authors: state.authors.filter(author => author.id !== action.id),
      loading: false,
      error: ''
    };
  }),
  on(AuthorActions.deleteAuthorFailure, (state, action): AuthorState => {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  })
  // ,
  // on(BookActions.toggleBookCoverVisibility, (state, action): BookState => {
  //   return {
  //     ...state,
  //     showBookCover: !state.showBookCover
  //   };
  // }),
  // on(BookActions.loadSelectedBookSuccess, (state, action): BookState => {
  //   return {
  //     ...state,
  //     selectedBook: action.selectedBook,
  //     error: ''
  //   };
  // }),
  // on(BookActions.loadSelectedBookFailure, (state, action): BookState => {
  //   return {
  //     ...state,
  //     selectedBook: null,
  //     error: action.error
  //   };
  // }),
  // on(BookActions.loadMoreBooksSuccess, (state, action): BookState => {
  //   const mergedBooks = state.books.concat(action.result.results);
  //   return {
  //     ...state,
  //     count: action.result.count,
  //     next: action.result.next,
  //     previous: action.result.previous,
  //     books: mergedBooks,
  //     error: ''
  //   };
  // }),
  // on(BookActions.loadMoreBooksFailure, (state, action): BookState => {
  //   return {
  //     ...state,
  //     selectedBook: null,
  //     error: action.error
  //   };
  // }),
  // on(BookActions.searchBooks, (state, action): BookState => {
  //   return {
  //     ...state,
  //     searchString: action.searchString
  //   };
  // }),

  // on(BookActions.searchBooksFinished, (state, action): BookState => {
  //   return {
  //     ...state,
  //     searchedBooks: action.searchedBooks
  //   };
  // })
);
