/* NgRx */
import { createReducer, on } from '@ngrx/store';
import * as SharedActions from 'src/app/shared/state/shared.actions';
import { AuthorState } from '../author.model';

import * as AuthorActions from './author.actions';

const initialState: AuthorState = {
  selectedAuthor: null,
  loading: false,
  error: '',
};

export const AuthorReducer = createReducer<AuthorState>(
  initialState,
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
  on(SharedActions.updateAuthorSuccess, (state, action): AuthorState => {
    // const updatedAuthors = state.authors.map(
    //   a => action.author.id === a.id ? action.author : a);
    return {
      ...state,
      // authors: updatedAuthors,
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
  on(SharedActions.deleteAuthorSuccess, (state, action): AuthorState => {
    return {
      ...state,
      // authors: state.authors.filter(author => author.id !== action.id),
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
);
