import { Component } from '@angular/core';
import { register } from 'module';
import { Carousel } from "../../shared/carousel/carousel";

@Component({
  selector: 'app-testimonialsection',
  imports: [Carousel],
  templateUrl: './testimonialsection.html',
  styleUrl: './testimonialsection.css',
})
export class Testimonialsection {

  ngAfterViewInit() {

    import('swiper/element').then(({ register }) => {
      register()
    })
  }

}
