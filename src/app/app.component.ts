import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  series = 1;

  public changeImages() {
    this.series = this.series === 1 ? 2 : 1;
  }
}
