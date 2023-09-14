import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBannerComponent } from './features-banner.component';

describe('BannerFeaturesComponent', () => {
  let component: FeaturesBannerComponent;
  let fixture: ComponentFixture<FeaturesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
