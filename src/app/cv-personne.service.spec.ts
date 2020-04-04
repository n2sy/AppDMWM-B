import { TestBed } from '@angular/core/testing';

import { CvPersonneService } from './cv-personne.service';

describe('CvPersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvPersonneService = TestBed.get(CvPersonneService);
    expect(service).toBeTruthy();
  });
});
