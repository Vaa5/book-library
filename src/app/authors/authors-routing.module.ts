import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorListComponent } from './author-list/author-list.component';


const routes: Routes = [
  { path: '', component: AuthorListComponent },
  { path: ':id', component: AuthorEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
