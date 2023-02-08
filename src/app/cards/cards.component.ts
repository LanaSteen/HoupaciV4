import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  images: any[]=[
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal1/galleria1.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal1/galleria1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal1/galleria2.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal1/galleria2.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal1/galleria3.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal1/galleria3.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal1/galleria4.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal1/galleria4.jpg",
        "alt": "Description for Image 4",
        "title": "Title 4"
    },
    {
        "previewImageSrc": "assets/showcase/images/galleria/gal1/galleria5.jpg",
        "thumbnailImageSrc": "assets/showcase/images/galleria/gal1/galleria5.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
    }
];

images2: any[]=[
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal2/galleria1.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal2/galleria1.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal2/galleria2.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal2/galleria2.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal2/galleria3.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal2/galleria3.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal2/galleria4.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal2/galleria4.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal2/galleria5.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal2/galleria5.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  }
];


images3: any[]=[
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria1.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria1.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria2.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria2.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria3.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria3.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria4.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria4.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria5.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria5.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria6.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria6.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal3/galleria7.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal3/galleria7.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  }
];



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

images5: any[]=[
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria1.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria1.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria2.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria2.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria3.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria3.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria4.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria4.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria5.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria5.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria6.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria6.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria7.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria7.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  }
  ,
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal5/galleria8.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal5/galleria8.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  }
];

images6: any[]=[
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal6/galleria1.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal6/galleria1.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal6/galleria2.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal6/galleria2.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal6/galleria3.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal6/galleria3.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal6/galleria4.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal6/galleria4.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "assets/showcase/images/galleria/gal6/galleria5.jpg",
      "thumbnailImageSrc": "assets/showcase/images/galleria/gal6/galleria5.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
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

  ngOnInit(): void {
  }

}


