import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetraenkListComponent } from './getraenk-list.component';

describe('GetraenkListComponent', () => {
  let component: GetraenkListComponent;
  let fixture: ComponentFixture<GetraenkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetraenkListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetraenkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
