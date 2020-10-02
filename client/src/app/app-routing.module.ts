import { CreateBookComponent } from './views/book/create-book/create-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './views/book/list-book/list-book.component';

const routes: Routes = [{
  path: '',
  component: ListBookComponent
},
{
  path: 'book/create',
  component: CreateBookComponent,
},
{
  path: 'book/create/:id',
  component: CreateBookComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
