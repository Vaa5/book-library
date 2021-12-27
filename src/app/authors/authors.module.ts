import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsRoutingModule } from './Authors-routing.module';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { AuthorReducer } from './state/author.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthorEffects } from './state/author.effects';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthorsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authors', AuthorReducer),
    EffectsModule.forFeature([AuthorEffects])
  ]
})
export class AuthorsModule { }
