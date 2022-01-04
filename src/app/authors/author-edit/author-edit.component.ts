import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Author } from 'src/app/shared/state/shared.model';
import { AuthorState } from '../author.model';

import * as AuthorActions from '../state/author.actions';
import { getBusyIndicator, getError, getSelectedAuthor } from '../state/author.selectors';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {

  selectedAuthor: Author;

  authorForm: FormGroup;

  selectedAuthor$ = this.store.select(getSelectedAuthor).pipe(
    tap((a) => {
      this.selectedAuthor = a;
      if (a) {
        this.authorForm.patchValue({
          name: a?.name,
          dateOfBirth: a?.dateOfBirth,
          description: a?.description
        });
      }
    })
  );
  loading$ = this.store.select(getBusyIndicator);
  error$ = this.store.select(getError);

  constructor(private store: Store<AuthorState>, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.authorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: [new Date(), [Validators.required]],
      description: ''
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.store.dispatch(AuthorActions.loadSelectedAuthor({ id: +params.id }));
      }
    });
  }

  save(): void {
    const author = { ...this.selectedAuthor, ...this.authorForm.value };
    if (author.id === 0) {
      this.store.dispatch(AuthorActions.createAuthor({ author }));
    } else {
      this.store.dispatch(AuthorActions.updateAuthor({ author }));
    }

    this.router.navigate(['/'], { relativeTo: this.route });
  }

}
