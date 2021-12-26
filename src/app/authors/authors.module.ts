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


@NgModule({
  declarations: [
    AuthorListComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authors', AuthorReducer),
    EffectsModule.forFeature([AuthorEffects])
  ]
})
export class AuthorsModule { }
