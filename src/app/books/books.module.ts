import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BookReducer } from './state/book.reducer';
import { BookEffects } from './state/book.effects';
import { BookEditComponent } from './book-edit/book-edit.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('books', BookReducer),
    EffectsModule.forFeature([BookEffects])
  ]
})
export class BooksModule { }
