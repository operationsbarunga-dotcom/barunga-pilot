import { Component, AfterViewInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
  selector: 'app-carousel',
  standalone: true,
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements AfterViewInit {

  @Input() slides: any[] = [];

  ngAfterViewInit() {
    import('swiper/element').then(({ register }) => {
      register();
    });
  }

}
