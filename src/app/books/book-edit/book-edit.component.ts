import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book, BookState } from '../book.model';
import * as BookActions from '../state/book.actions';
import { getBusyIndicator, getError } from '../state/book.selectors';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  selectedBook: Book;

  bookForm: FormGroup;

  // selectedBook$ = this.store.select(getSelectedBook).pipe(
  //   tap((a) => {
  //     this.selectedBook = a;
  //     if (a) {
  //       this.bookForm.patchValue({
  //         name: a?.name,
  //         dateOfBirth: a?.dateOfBirth,
  //         description: a?.description
  //       });
  //     }
  //   })
  // );
  loading$ = this.store.select(getBusyIndicator);
  error$ = this.store.select(getError);

  constructor(private store: Store<BookState>, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: [new Date(), [Validators.required, Validators.maxLength(50)]],
      description: ''
    });


    this.route.params.subscribe(params => {
      if (params.id) {
        this.store.dispatch(BookActions.loadSelectedBook({ id: +params.id }));
        // this.selectedBook$ = this.store.select(getBooks).pipe(
        //   map(a => a.find(book => book.id === +params.id)),
        // );
      }
    });
  }

  // save(): void {
  //   const book = { ...this.selectedBook, ...this.bookForm.value };
  //   if (book.id === 0) {
  //     this.store.dispatch(BookActions.createBook({ book }));
  //   } else {
  //     this.store.dispatch(BookActions.updateBook({ book }));
  //   }

  //   this.router.navigate(['/'], { relativeTo: this.route });
  // }
}
