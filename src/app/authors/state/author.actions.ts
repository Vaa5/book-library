import { createAction, props } from '@ngrx/store';
import { Author } from 'src/app/shared/state/shared.model';

export const deleteAuthor = createAction(
  '[Author List] Delete',
  props<{ id: number }>()
);

// export const deleteAuthorSuccess = createAction(
//   '[Author List] Delete Success',
//   props<{ id: number }>()
// );

export const deleteAuthorFailure = createAction(
  '[Author List] Delete Fail',
  props<{ error: string }>()
);

export const loadSelectedAuthor = createAction(
  '[Author Edit] Load',
  props<{ id: number }>()
);

export const loadSelectedAuthorSuccess = createAction(
  '[Author Edit] Load Success',
  props<{ author: Author }>()
);

export const loadSelectedAuthorFailure = createAction(
  '[Author Edit] Load Fail',
  props<{ error: string }>()
);

export const createAuthor = createAction(
  '[Author Edit] Create',
  props<{ author: Author }>()
);

export const createAuthorSuccess = createAction(
  '[Author Edit] Create Success',
  props<{ author: Author }>()
);

export const createAuthorFailure = createAction(
  '[Author Edit] Create Fail',
  props<{ error: string }>()
);

export const updateAuthor = createAction(
  '[Author Edit] Update',
  props<{ author: Author }>()
);

// export const updateAuthorSuccess = createAction(
//   '[Author Edit] Update Success',
//   props<{ author: Author }>()
// );

export const updateAuthorFailure = createAction(
  '[Author Edit] Update Fail',
  props<{ error: string }>()
);
