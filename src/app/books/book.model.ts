export interface Book {
  id: number | null;
  bookName: string;
  description: string;
  bookPublisher: string;
  bookPublishDate: Date;
  authorIDs: number[];
  categoryIDS: number[];
  languages: string[];
}

export interface Category {
  id: number | null;
  categoryName: string;
  categoryOverview: string;
}

// State for this feature (Book)
export interface BookState {
  books: Book[];
  categories: Category[];
  selectedBook: Book | null;
  loading: boolean;
  error: string;
}
