export interface Author {
  id: number | null;
  name: string;
  dateOfBirth: Date;
  description: string;
}

// State for this feature (Book)
export interface AuthorState {
  authors: Author[];
  selectedAuthor: Author;
  loading: boolean;
  error: string;
}
