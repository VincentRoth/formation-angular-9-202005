import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { VeterinarianService } from './veterinarian.service';
import { Veterinarian } from '../model/veterinarian';

describe('VeterinarianService', () => {
  let service: VeterinarianService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VeterinarianService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should query all vets', () => {
    service.getAll().subscribe((vets) => {
      expect(vets.length).toEqual(1);
      expect(vets[0].id).toEqual(1);
      expect(vets[0].lastName).toEqual('test-lastname');
      expect(vets[0].firstName).toEqual('test-firstname');
    });
    const request = httpMock.expectOne('/api/veterinarians');
    expect(request.request.method).toEqual('GET');
    request.flush([
      { id: 1, firstName: 'test-firstname', lastName: 'test-lastname' },
    ] as Veterinarian[]);
    httpMock.verify();
  });
});
