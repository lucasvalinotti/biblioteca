import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html'
})
export class LayoutPageComponent implements OnInit{
  items: MenuItem[] | undefined;
  
  
  ngOnInit(): void {
    this.items = [
      {label: 'Libros',
      icon: 'pi pi-fw pi-book',
      items: [
        {
          label: 'Listado',
          icon: 'pi pi-fw pi-book',
          url: '#/library/books'
        },
        {
          label: 'Agregar',
          icon: 'pi pi-fw pi-plus',
          url: '#/library/add-book'
        },
      ]},
      {label: 'Autores',
      icon: 'pi pi-fw pi-book',
      items: [
        {
          label: 'Listado',
          icon: 'pi pi-fw pi-book',
          url: '#/library/authors'
        },
        {
          label: 'Agregar',
          icon: 'pi pi-fw pi-plus',
          url: '#/library/add-author'
        },
      ]},
    ];
  }
}
