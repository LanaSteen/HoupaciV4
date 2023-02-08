import { Component } from '@angular/core';

@Component({
  selector: 'app-backpacks',
  templateUrl: './backpacks.component.html',
  styleUrls: ['./backpacks.component.css']
})
export class BackpacksComponent {

  images4: any[]=[
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria1.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria2.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria2.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria3.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria3.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria4.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria4.jpg",
        "alt": "Description for Image 4",
        "title": "Title 4"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria5.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria5.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria6.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria6.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal4/galleria7.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal4/galleria7.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    }
  ];

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 5
    },
    {
        breakpoint: '560px',
        numVisible: 5
    },
    {
      breakpoint: '300px',
      numVisible: 3
  }
];
}
