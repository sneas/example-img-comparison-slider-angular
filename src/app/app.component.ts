import { Component, ElementRef, ViewChild } from '@angular/core';
import { HTMLImgComparisonSliderElement } from "img-comparison-slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('slider') slider: ElementRef<HTMLImgComparisonSliderElement>;

  series = 1;

  public changeImages() {
    this.series = this.series === 1 ? 2 : 1;
    this.slider.nativeElement.reset();
  }
}
