import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthorState } from '../author.model';


// Selector functions
const getAuthorFeatureState = createFeatureSelector<AuthorState>('authors');

export const getBusyIndicator = createSelector(
  getAuthorFeatureState,
  state => state.loading
);

export const getSelectedAuthor = createSelector(
  getAuthorFeatureState,
  state => state.selectedAuthor
);

export const getError = createSelector(
  getAuthorFeatureState,
  state => state.error
);
