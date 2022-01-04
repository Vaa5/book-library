
/* NgRx */
import { createReducer, on } from '@ngrx/store';
import * as SharedActions from './shared.actions';
import { SharedState } from './shared.model';

const initialState: SharedState = {
  authors: [],
  categories: []
};

export const SharedReducer = createReducer<SharedState>(
  initialState,
  // on(sharedActions.loadAuthors, (state, action): SharedState => {
  //   return {
  //     ...state,
  //     loading: true
  //   };
  // }),
  on(SharedActions.loadAuthorsSuccess, (state, action): SharedState => {
    return {
      ...state,
      authors: action.authors
    };
  }),
  on(SharedActions.loadAuthorsFailure, (state, action): SharedState => {
    return {
      ...state,
      authors: []
    };
  }),
  on(SharedActions.deleteAuthorSuccess, (state, action): SharedState => {
    return {
      ...state,
      authors: state.authors.filter(author => author.id !== action.id)
    };
  }),
  on(SharedActions.updateAuthorSuccess, (state, action): SharedState => {
    const updatedAuthors = state.authors.map(
      a => action.author.id === a.id ? action.author : a);
    return {
      ...state,
      authors: updatedAuthors
    };
  }),
  on(SharedActions.loadCategoriesSuccess, (state, action): SharedState => {
    return {
      ...state,
      categories: action.categories,
    };
  }),
  on(SharedActions.loadCategoriesFailure, (state, action): SharedState => {
    return {
      ...state,
      categories: []
    };
  }),
);
