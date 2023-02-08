import { Component } from '@angular/core';
import {GalleriaModule} from 'primeng/galleria';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  implements OnInit {
  images: any[]=[
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria1.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria1s.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria2.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria2s.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria3.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria3s.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria4.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria4s.jpg",
        "alt": "Description for Image 4",
        "title": "Title 4"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria5.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria5s.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria6.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria6s.jpg",
        "alt": "Description for Image 6",
        "title": "Title 6"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria7.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria7s.jpg",
        "alt": "Description for Image 7",
        "title": "Title 7"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria8.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria8s.jpg",
        "alt": "Description for Image 8",
        "title": "Title 8"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/galleria9.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/galleria9s.jpg",
        "alt": "Description for Image 9",
        "title": "Title 9"
    },
    {
        "previewImageSrc": "demo/images/galleria/galleria10.jpg",
        "thumbnailImageSrc": "demo/images/galleria/galleria10s.jpg",
        "alt": "Description for Image 10",
        "title": "Title 10"
    },
    {
        "previewImageSrc": "demo/images/galleria/galleria11.jpg",
        "thumbnailImageSrc": "demo/images/galleria/galleria11s.jpg",
        "alt": "Description for Image 11",
        "title": "Title 11"
    },
    {
        "previewImageSrc": "demo/images/galleria/galleria12.jpg",
        "thumbnailImageSrc": "demo/images/galleria/galleria12s.jpg",
        "alt": "Description for Image 12",
        "title": "Title 12"
    },
    {
        "previewImageSrc": "demo/images/galleria/galleria13.jpg",
        "thumbnailImageSrc": "demo/images/galleria/galleria13s.jpg",
        "alt": "Description for Image 13",
        "title": "Title 13"
    },
    {
        "previewImageSrc": "demo/images/galleria/galleria14.jpg",
        "thumbnailImageSrc": "demo/images/galleria/galleria14s.jpg",
        "alt": "Description for Image 14",
        "title": "Title 14"
    },
    {
        "previewImageSrc": "demo/images/galleria/galleria15.jpg",
        "thumbnailImageSrc": "demo/images/galleria/galleria15s.jpg",
        "alt": "Description for Image 15",
        "title": "Title 15"
    }
];

  constructor() { }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 8
      },
      {
          breakpoint: '768px',
          numVisible: 5
      },
      {
          breakpoint: '560px',
          numVisible: 3
      },
      {
        breakpoint: '300px',
        numVisible: 1
    }
  ];
  ngOnInit() {
      // this.photoService.getImages().then(images => this.images = images);
  }
}