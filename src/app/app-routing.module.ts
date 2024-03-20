import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'library',
  loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)},
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: '**', redirectTo: 'library',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
