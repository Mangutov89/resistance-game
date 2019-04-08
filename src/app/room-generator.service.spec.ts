import { TestBed, inject } from '@angular/core/testing';

import { RoomGeneratorService } from './room-generator.service';

describe('RoomGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomGeneratorService]
    });
  });

  it('should be created', inject([RoomGeneratorService], (service: RoomGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
