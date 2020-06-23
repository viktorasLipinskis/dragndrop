import { TestBed } from '@angular/core/testing';

import { DragndropService } from './dragndrop.service';

describe('DragndropService', () => {
  let service: DragndropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragndropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
