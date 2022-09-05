import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { images } from './Data/Images';
import { imgEven } from './Data/ImgEven';
import { imgOdds } from './Data/ImgOdd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'FolderApp';

  public firstDiv = 1;

  public allImages = [
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/1.jpg',
      index: 1
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/2.jpg',
      index: 2
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/3.jpg',
      index: 3
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/4.jpg',
      index: 4
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/5.jpg',
      index: 5
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/6.jpg',
      index: 6
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/7.jpg',
      index: 7
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/8.jpg',
      index: 8
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/9.jpg',
      index: 9
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/10.jpg',
      index: 10
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/11.jpg',
      index: 11
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/12.jpg',
      index: 12
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/13.jpg',
      index: 13
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/14.jpg',
      index: 14
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/15.jpg',
      index: 15
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/16.jpg',
      index: 16
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/17.jpg',
      index: 17
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/18.jpg',
      index: 18
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/19.jpg',
      index: 19
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/20.jpg',
      index: 20
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/21.jpg',
      index: 21
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/22.jpg',
      index: 22
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/23.jpg',
      index: 23
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/24.jpg',
      index: 24
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/25.jpg',
      index: 25
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/26.jpg',
      index: 26
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/27.jpg',
      index: 27
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/28.jpg',
      index: 28
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/29.jpg',
      index: 29
    },
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/30.jpg',
      index: 30
    }
  ]

  public array = images;
  public evenImgs: any[] = [
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/2.jpg',
      index: 2
    }
  ];
  public oddImgs: any[] = [
    {
      img: 'https://static01.eu/1prospekte.de/images/uploads/folder/87858/1.jpg',
      index: 1
    }
  ];
  public showDoubleImg: any;
  showIndexFirst: any = 1;
  index: any = '0 - 1 / 30';
  nextbtn1 = true;
  nextbtn2 = false;

  visible = false;
  placement: NzDrawerPlacement = 'bottom';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  @ViewChild(NzCarouselComponent, { static: false })
  myCarousel!: NzCarouselComponent;

  goTo() {
    this.myCarousel.goTo(Number(this.index));
  }

  ngAfterViewInit(): void {
    // this.goTo();
  }

  next(data: any) {
    this.showIndexFirst = 0;
    this.showDoubleImg = 2;
    this.firstDiv = 0;

    this.evenImgs = [];
    this.oddImgs = [];

    const id = data.index;

    const newImgIndexEven = id + 1;
    const newImgIndexOdd = newImgIndexEven + 1;

    if(newImgIndexEven === 32) {
      console.log('ddddqwqwqwq');
      this.nextbtn1 = false;
      this.nextbtn2 = true;
    }

    console.log(newImgIndexEven, newImgIndexOdd, 'even', 'odd');

    this.index = `${newImgIndexEven} - ${newImgIndexEven === 30 ? 0 : newImgIndexOdd}`;

    this.allImages.forEach((even) => {
      if(even.index == newImgIndexEven) {
        this.evenImgs.push(even)
      }
    })

    this.allImages.forEach((odd) => {
      if(odd.index == newImgIndexOdd) {
        this.oddImgs.push(odd)
      }
    })
  }

  pre(data: any) {
    this.showIndexFirst = 0;
    this.showDoubleImg = 2;

    this.evenImgs = [];
    this.oddImgs = [];

    const id = data.index;

    const newImgIndexEven = id - 1;
    const newImgIndexOdd = newImgIndexEven - 1;


    console.log(newImgIndexEven, newImgIndexOdd, 'even', 'odd');

    this.index = `${newImgIndexEven} - ${newImgIndexEven === 30 ? 0 : newImgIndexOdd}`

    if(newImgIndexEven == 2 && newImgIndexOdd == 1) {
      console.log('index 2 - 1');
      this.allImages.forEach((even) => {
        if(even.index == 2) {
          this.evenImgs.push(even)
        }
      })
  
      this.allImages.forEach((odd) => {
        if(odd.index == 1) {
          this.oddImgs.push(odd)
        }
      })
    }else if(newImgIndexEven !== 2 && newImgIndexOdd !== 1) {
      console.log('index 1 - -0');
      this.allImages.forEach((even) => {
        if(even.index == newImgIndexEven) {
          this.evenImgs.push(even)
        }
      })
  
      this.allImages.forEach((odd) => {
        if(odd.index == newImgIndexOdd) {
          this.oddImgs.push(odd)
        }
      })
    }
  }

  public addNewEvenImg(number: number): void {
    this.evenImgs.push(
      {
        img: `https://static01.eu/1prospekte.de/images/uploads/folder/87858/${number}.jpg`,
        index: number
      }
    )
  }

  public addNewOddImg(number: number): void {
    this.oddImgs.push(
      {
        img: `https://static01.eu/1prospekte.de/images/uploads/folder/87858/${number}.jpg`,
        index: number
      }
    )
  }
}
