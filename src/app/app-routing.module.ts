import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from './components/media-item-form/media-item-form.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
