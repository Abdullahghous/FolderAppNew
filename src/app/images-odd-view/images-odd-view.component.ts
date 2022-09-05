import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { imgOdds } from '../Data/ImgOdd';

@Component({
  selector: 'app-images-odd-view',
  templateUrl: './images-odd-view.component.html',
  styleUrls: ['./images-odd-view.component.css']
})
export class ImagesOddViewComponent {

  public imgOdd = imgOdds;
  showIndex: any = 2;
  index: any;

  @ViewChild(NzCarouselComponent, { static: false })
  myCarousel!: NzCarouselComponent;

  goTo() {
    this.myCarousel.goTo(Number(this.index));
  }

  next() {
    console.log(this.myCarousel.activeIndex, 'next');
    this.index = this.myCarousel.activeIndex;
    this.myCarousel.next();
  }

  pre() {
    console.log(this.myCarousel.activeIndex, 'Pre');
    this.index = this.myCarousel.activeIndex;
    this.myCarousel.pre();
  }

}
