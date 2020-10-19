import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('../modules/new-item/new-item.module').then(m => m.NewItemModule)
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
