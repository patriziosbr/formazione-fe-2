import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html', !rimuovere questo e mettere l'altro
  styleUrls: ['./app.component.scss'],
  template: `<example-dialog></example-dialog>`
})
export class AppComponent {
  title = 'formazione-fe-2';
}
