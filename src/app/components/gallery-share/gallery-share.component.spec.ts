import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryShareComponent } from './gallery-share.component';

describe('GalleryShareComponent', () => {
  let component: GalleryShareComponent;
  let fixture: ComponentFixture<GalleryShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
