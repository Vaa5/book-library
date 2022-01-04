import { Author, Category } from '../shared/state/shared.model';

export interface Book {
  id: number | null;
  title: string;
  description: string;
  bookPublisher: string;
  bookPublishDate: Date;
  authors: Author[];
  categories: Category[];
  languages: string[];
}

// State for this feature (Book)
export interface BookState {
  books: Book[];
  selectedBook: Book | null;
  loading: boolean;
  error: string;
}
