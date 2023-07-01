import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    'assets/imge/best2.jpg',
    'assets/imge/4hada.jpg',
    'assets/imge/e3lam1.jpg',
    // add more image URLs here as needed
  ];
  currentIndex = 0;
  previousIndex = 0;

  constructor(private translate: TranslateService) {   translate.setDefaultLang('en');
  translate.use('ar');
}

  ngOnInit(): void {
    setInterval(() => {
      this.incrementIndex();
    }, 3500);

  }

  incrementIndex() {
    this.previousIndex = this.currentIndex;
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  changeImage(index: number) {
    this.previousIndex = this.currentIndex;
    this.currentIndex = index;
  }

}
