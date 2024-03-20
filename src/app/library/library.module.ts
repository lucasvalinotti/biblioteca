import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { AuthorsPageComponent } from './pages/authors-page/authors-page.component';
import { LibraryRoutingModule } from './library-routing.module';
import { PrimeModule } from '../prime/prime.module';
import { AddBookPageComponent } from './pages/add-book-page/add-book-page.component';
import { AddAuthorPageComponent } from './pages/add-author-page/add-author-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    BooksPageComponent,
    BookPageComponent,
    AuthorsPageComponent,
    AddBookPageComponent,
    AddAuthorPageComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    PrimeModule
  ]
})
export class LibraryModule { }
