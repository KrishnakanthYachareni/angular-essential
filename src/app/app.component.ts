import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html', // or template: '<h1> My app <h1>' can also be used for direct HTML template
  styleUrls: ['./app.component.css'] // or styles['h1 { color: #fffff; }']
})
export class AppComponent {
  title = 'Movie Media';

  firstMediaItem = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: 'Science Fiction',
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem){

  }
}
