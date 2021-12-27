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
        name: 'Astrid Lindgren',
        dateOfBirth: new Date('11/14/1907'),
        description: 'Astrid Anna Emilia Lindgren was a Swedish writer of fiction and screenplays. She is best known for several children\'s book series, featuring Pippi Longstocking, Emil of Lönneberga, Karlsson-on-the-Roof, and the Six Bullerby Children (Children of Noisy Village in the US), and for the children\'s fantasy novels Mio, My Son, Ronia the Robber\'s Daughter, and The Brothers Lionheart. Lindgren worked on the Children\'s Literature Editorial Board at the Rabén & Sjögren publishing house in Stockholm and wrote more than 30 books for children.'
      },
      {
        id: 2,
        name: 'Erich Maria Remarque',
        dateOfBirth: new Date('06/22/1898'),
        description: 'Erich Maria Remarque was a German novelist. His landmark novel Im Westen nichts Neues (All Quiet on the Western Front) (1928), about the German military experience of World War I, was an international best-seller which created a new literary genre, and was adapted into a film in 1930.'
      },
      {
        id: 3,
        name: 'Ernest Hemingway',
        dateOfBirth: new Date('07/21/1899'),
        description: 'Ernest Miller Hemingway was an American novelist, short-story writer, journalist, and sportsman. His economical and understated style—which he termed the iceberg theory—had a strong influence on 20th-century fiction, while his adventurous lifestyle and his public image brought him admiration from later generations.'
      }
    ];

    return {
      authors
    };
  }
}
