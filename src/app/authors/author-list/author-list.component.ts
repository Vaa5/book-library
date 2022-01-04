import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as sharedActions from 'src/app/shared/state/shared.actions';
import { Author, SharedState } from 'src/app/shared/state/shared.model';
import { getAuthors } from 'src/app/shared/state/shared.selectors';
import { AuthorState } from '../author.model';

import * as AuthorActions from '../state/author.actions';
import { getBusyIndicator } from '../state/author.selectors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'name', 'dateOfBirth', 'description'];
  dataSource: MatTableDataSource<Author>;

  authors$ = this.sharedStore.select(getAuthors).pipe(
    tap((authors) => {
      this.dataSource = new MatTableDataSource<Author>(authors);
    })
  );

  loading$ = this.store.select(getBusyIndicator);

  constructor(private store: Store<AuthorState>, private sharedStore: Store<SharedState>) { }

  ngOnInit(): void {
    this.store.dispatch(sharedActions.loadAuthors());
  }

  deleteAuthor(id: number): void {
    this.store.dispatch(AuthorActions.deleteAuthor({ id }));
  }

}
