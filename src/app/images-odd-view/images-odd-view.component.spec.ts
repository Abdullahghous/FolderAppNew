import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOddViewComponent } from './images-odd-view.component';

describe('ImagesOddViewComponent', () => {
  let component: ImagesOddViewComponent;
  let fixture: ComponentFixture<ImagesOddViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesOddViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
