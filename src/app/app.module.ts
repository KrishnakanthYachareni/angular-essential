import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemFormComponent } from './components/media-item-form/media-item-form.component';
import { MediaItemListComponent } from './components/media-item-list/media-item-list.component';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { FavoriteDirective } from './directives/favorite.directive';
import { CategoryPipe } from './pipes/category.pipe';
import { lookupLists, lookupListToken } from './providers';

@NgModule({
  // It conntains Components, Directives, Pipes
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryPipe,
    MediaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
