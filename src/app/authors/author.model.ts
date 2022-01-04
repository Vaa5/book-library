import { Author } from '../shared/state/shared.model';

// State for this feature (Book)
export interface AuthorState {
  selectedAuthor: Author;
  loading: boolean;
  error: string;
}
