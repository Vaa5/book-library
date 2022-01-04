import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.model';


// Selector functions
const getSharedFeatureState = createFeatureSelector<SharedState>('shared');


export const getAuthors = createSelector(
  getSharedFeatureState,
  state => state.authors
);

export const getCategories = createSelector(
  getSharedFeatureState,
  state => state.categories
);
