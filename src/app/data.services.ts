import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Author } from './authors/author.model';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }

  createDb(): { authors: Author[] } {
    const authors: Author[] = [
      {
        id: 1,
        name: 'Astrid',
        lastName: 'Lindgren',
        dateOfBirth: new Date('11/14/1907'),
        description: 'Astrid Anna Emilia Lindgren was a Swedish writer of fiction and screenplays. She is best known for several children\'s book series, featuring Pippi Longstocking, Emil of Lönneberga, Karlsson-on-the-Roof, and the Six Bullerby Children (Children of Noisy Village in the US), and for the children\'s fantasy novels Mio, My Son, Ronia the Robber\'s Daughter, and The Brothers Lionheart. Lindgren worked on the Children\'s Literature Editorial Board at the Rabén & Sjögren publishing house in Stockholm and wrote more than 30 books for children.'
      },
      {
        id: 1,
        name: 'Astrid',
        lastName: 'Lindgren',
        dateOfBirth: new Date('11/14/1907'),
        description: 'Astrid Anna Emilia Lindgren was'
      }
    ];

    return {
      authors
    };
  }
}
