import { Component } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html'
})
export class BooksPageComponent {
  public books:Book[] = [
    {id:1, title: 'Juego de Tronos', pages: 800, author: 'George RR Martin', read: 'Si', borrowed: 'Aye', url:'assets/got1.webp'},
    {id:2, title: 'Choque de Reyes', pages: 878, author: 'George RR Martin', read: 'Si', borrowed: 'No', url:'assets/got2.webp'},
    {id:3, title: 'Tormenta de Espadas', pages: 973, author: 'George RR Martin', read: 'No', borrowed: 'No', url:'assets/got3.webp'},
    {id:4, title: 'Festín de Cuervos', pages: 787, author: 'George RR Martin', read: 'No', borrowed: 'No', url:'assets/got4.webp'},
    {id:5, title: 'Harry Potter y la Piedra Filosofal', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp1.webp'},
    {id:6, title: 'Harry Potter y la Cámara Secreta', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp2.webp'},
    {id:7, title: 'Harry Potter y el Prisionero de Azkaban', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp3.webp'},
    {id:8, title: 'Harry Potter y el Cáliz de Fuego', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp4.webp'},
    {id:9, title: 'Harry Potter y la Órden del Fénix', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp5.webp'},
    {id:10, title: 'Harry Potter y el Misterio del Principe', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp6.webp'},
    {id:11, title: 'Harry Potter y las Reliquias de la Muerte', pages: 787, author: 'JK Rowling', read: 'Si', borrowed: 'No', url:'assets/hp7.webp'},
  ];
}
