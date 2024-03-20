import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';


@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    DataViewModule,
    CardModule,
    DividerModule
  ]
})
export class PrimeModule { }
