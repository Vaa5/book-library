import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './books/book.model';
import { Author, Category } from './shared/state/shared.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }

  createDb(): { authors: Author[], books: Book[], categories: Category[] } {
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

    const categories: Category[] = [
      {
        id: 1,
        categoryName: 'Action and Adventure',
        categoryOverview: 'Action and adventure books constantly have you on the edge of your seat with excitement, as your fave main character repeatedly finds themselves in high stakes situations. The protagonist has an ultimate goal to achieve and is always put in risky, often dangerous situations. This genre typically crosses over with others like mystery, crime, sci-fi, and fantasy.'
      },
      {
        id: 2,
        categoryName: 'Classics',
        categoryOverview: 'You may think of these books as the throwback readings you were assigned in English class. (Looking at you, Charles Dickens.) The classics have been around for decades, and were often groundbreaking stories at their publish time, but have continued to be impactful for generations, serving as the foundation for many popular works we read today.'
      },
      {
        id: 3,
        categoryName: 'Comic Book or Graphic Novel',
        categoryOverview: 'The stories in comic books and graphic novels are presented to the reader through engaging, sequential narrative art (illustrations and typography) that\'s either presented in a specific design or the traditional panel layout you find in comics.With both, you\'ll often find the dialogue presented in the tell-tale "word balloons" next to the respective characters.'
      },
      {
        id: 4,
        categoryName: 'Fiction',
        categoryOverview: '"Fiction" refers to literature created from the imagination. Mysteries, science fiction, romance, fantasy, chick lit, crime thrillers are all fiction genres. ... Our Fiction Department also has a large selection of popular movies and television shows on DVD. "Nonfiction" refers to literature based in fact.'
      }
    ];

    const books: Book[] = [
      {
        id: 1,
        title: 'Karlsson on the Roof',
        bookPublisher: '',
        bookPublishDate: new Date('01/01/1955'),
        description: 'Karlsson-on-the-Roof is a character who figures in a series of children\'s books by the Swedish author Astrid Lindgren.Translated books and cartoon adaptation of the series became popular in the Soviet Union when it was released in the 1970s.Lindgren may have borrowed the idea for the series from a similar story about Mr.O\'Malley in the comic strip "Barnaby" (1942) by Crockett Johnson.',
        authors: [authors[0]],
        categories: [categories[0], categories[1]],
        languages: ['Swedish']
      },
      {
        id: 2,
        title: 'Shadows in Paradise',
        bookPublisher: 'Harcourt Brace',
        bookPublishDate: new Date('01/01/1971'),
        description: 'Shadows in Paradise is a 1971 novel by Erich Maria Remarque. It is about a journalist, Robert Ross, who spent two years evading the Holocaust hiding in an art museum, flees from Europe to the United States and settles in New York. He meets a woman named Natasha, begins new career as an art dealer and travels to Hollywood. After the war is over, Ross eventually leaves the States. The book was cited for having a tone of "lambent gray romanticism".',
        authors: [authors[1]],
        categories: [categories[1], categories[3]],
        languages: ['German']
      },
      {
        id: 3,
        title: 'Men Without Women',
        bookPublisher: 'Charles Scribner\'s Sons',
        bookPublishDate: new Date('01/01/1927'),
        description: 'Men Without Women is the second collection of short stories written by American author Ernest Hemingway (July 21, 1899 – July 2, 1961). The volume consists of 14 stories, 10 of which had been previously published in magazines. It was published in October 1927, with a first print-run of approximately 7600 copies at $2.',
        authors: [authors[2]],
        categories: [categories[1]],
        languages: ['English']
      }
    ];



    return {
      authors, books, categories
    };
  }
}
