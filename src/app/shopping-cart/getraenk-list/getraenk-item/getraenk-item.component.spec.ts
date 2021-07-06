import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetraenkItemComponent } from './getraenk-item.component';

describe('GetraenkItemComponent', () => {
  let component: GetraenkItemComponent;
  let fixture: ComponentFixture<GetraenkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetraenkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetraenkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
