import { TestBed } from '@angular/core/testing';

import { AnimationsLogicService } from './animations-logic.service';

describe('AnimationsLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimationsLogicService = TestBed.get(AnimationsLogicService);
    expect(service).toBeTruthy();
  });
});
