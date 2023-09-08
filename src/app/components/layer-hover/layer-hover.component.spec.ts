import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerHoverComponent } from './layer-hover.component';

describe('LayerHoverComponent', () => {
  let component: LayerHoverComponent;
  let fixture: ComponentFixture<LayerHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayerHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
