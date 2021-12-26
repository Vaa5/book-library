export interface Author {
  id: number | null;
  name: string;
  lastName: string;
  dateOfBirth: Date;
  description: string;
}

// State for this feature (Book)
export interface AuthorState {
  authors: Author[];
  selectedAuthorID: number | null;
  loading: boolean;
  error: string;
}
