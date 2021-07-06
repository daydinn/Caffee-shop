import { TestBed } from '@angular/core/testing';

import { GetraenkService } from './getraenk.service';

describe('GetraenkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetraenkService = TestBed.get(GetraenkService);
    expect(service).toBeTruthy();
  });
});