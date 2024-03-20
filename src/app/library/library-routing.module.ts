import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { AuthorsPageComponent } from './pages/authors-page/authors-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AddBookPageComponent } from './pages/add-book-page/add-book-page.component';
import { AddAuthorPageComponent } from './pages/add-author-page/add-author-page.component';
import { PrimeModule } from '../prime/prime.module';

const routes: Routes = [
  {path: '', component: LayoutPageComponent,
  children: [
    {path: 'books', component: BooksPageComponent},
    {path: 'authors', component: AuthorsPageComponent},
    {path: 'add-book', component: AddBookPageComponent},
    {path: 'add-author', component: AddAuthorPageComponent},
    {path: 'books/:id', component: BookPageComponent},
    {path: '**', redirectTo: 'books'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }