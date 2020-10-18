import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html', // or template: '<h1> My app <h1>' can also be used for direct HTML template
  styleUrls: ['./app.component.css'] // or styles['h1 { color: #fffff; }']
})
export class AppComponent {
  title = 'Movie Media';
}
