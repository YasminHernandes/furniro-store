import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-gallery-swiper',
  templateUrl: './gallery-swiper.component.html',
  styleUrls: ['./gallery-swiper.component.scss']
})
export class GallerySwiperComponent implements OnInit {
  swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    },
    loop: true,
  });

  constructor() { }

  ngOnInit(): void {
  }

}
