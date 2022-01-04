export interface Author {
  id: number | null;
  name: string;
  dateOfBirth: Date;
  description: string;
}

export interface Category {
  id: number | null;
  categoryName: string;
  categoryOverview: string;
}

// State for this feature (Shared)
export interface SharedState {
  authors: Author[];
  categories: Category[];
}
