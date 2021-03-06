import { TestBed } from '@angular/core/testing';

import { AnimalDetailResolverService } from './animal-detail-resolver.service';
import { AnimalService } from '../shared/api/services/animal.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AnimalDetailResolverService', () => {
  let service: AnimalDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AnimalDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
