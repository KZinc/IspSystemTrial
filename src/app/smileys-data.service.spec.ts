import { TestBed } from '@angular/core/testing';

import { SmileysDataService } from './smileys-data.service';

describe('SmileysDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmileysDataService = TestBed.get(SmileysDataService);
    expect(service).toBeTruthy();
  });
});
