import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as SharedActions from 'src/app/shared/state/shared.actions';
import { SharedState } from 'src/app/shared/state/shared.model';
import { Book, BookState } from '../book.model';
import * as BookActions from '../state/book.actions';
import { getBusyIndicator, getError, getSelectedBook } from '../state/book.selectors';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { getCategories } from 'src/app/shared/state/shared.selectors';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // categoryCtrl = new FormControl();
  // filteredCategorys: Observable<string[]>;
  // categorys: string[] = ['Lemon'];
  // allCategorys: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  // @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;

  selectedBook: Book;
  bookForm: FormGroup;

  categories$ = this.sharedStore.select(getCategories);

  selectedBook$ = this.store.select(getSelectedBook).pipe(
    tap((a) => {
      this.selectedBook = a;
      if (a) {
        this.bookForm.patchValue({
          title: a?.title,
          bookPublisher: a?.bookPublisher,
          bookPublishDate: a?.bookPublishDate,
          description: a?.description
        });
      }
    })
  );
  loading$ = this.store.select(getBusyIndicator);
  error$ = this.store.select(getError);

  constructor(private store: Store<BookState>, private sharedStore: Store<SharedState>,
              private route: ActivatedRoute,
              private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      bookPublisher: '',
      bookPublishDate: [new Date(), [Validators.required]],
      description: ''
    });


    this.route.params.subscribe(params => {
      if (params.id) {
        this.store.dispatch(BookActions.loadSelectedBook({ id: +params.id }));
        // this.selectedBook$ = this.store.select(getBooks).pipe(
        //   map(a => a.find(book => book.id === +params.id)),
        // );

        // Moved in Effects
        // this.sharedStore.dispatch(SharedActions.loadAuthors());
        // this.sharedStore.dispatch(SharedActions.loadCategories());
      }
    });
  }

  save(): void {
    const book = { ...this.selectedBook, ...this.bookForm.value };
    if (book.id === 0) {
      this.store.dispatch(BookActions.createBook({ book }));
    } else {
      this.store.dispatch(BookActions.updateBook({ book }));
    }

    this.router.navigate(['/books'], { relativeTo: this.route });
  }


  // category
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.categorys.push(value);
  //   }

  //   // Clear the input value
  //   // event.chipInput!.clear();

  //   this.categoryCtrl.setValue(null);
  // }

  // remove(category: string): void {
  //   const index = this.categorys.indexOf(category);

  //   if (index >= 0) {
  //     this.categorys.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.categorys.push(event.option.viewValue);
  //   this.categoryInput.nativeElement.value = '';
  //   this.categoryCtrl.setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allCategorys.filter(category => category.toLowerCase().includes(filterValue));
  // }
}
