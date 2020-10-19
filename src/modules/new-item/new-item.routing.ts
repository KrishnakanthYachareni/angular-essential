import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from '../../app/components/media-item-form/media-item-form.component';

const newItemRoutes: Routes = [
  { path: '', component: MediaItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);
