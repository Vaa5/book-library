import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Author, AuthorState } from '../author.model';
import * as AuthorActions from '../state/author.actions';
import { getAuthors } from '../state/author.selectors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'dateOfBirth', 'description'];
  dataSource: MatTableDataSource<Author>;

  authors$ = this.store.select(getAuthors).pipe(
    tap((authors) => {
      this.dataSource = new MatTableDataSource<Author>(authors);
    })
  );

  constructor(private store: Store<AuthorState>) { }

  ngOnInit(): void {
    this.store.dispatch(AuthorActions.loadAuthors());
  }

}
