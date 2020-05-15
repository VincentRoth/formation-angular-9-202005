import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDetailComponent } from './animal-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../shared/api/model/animal';
import { of } from 'rxjs';

describe('AnimalDetailComponent', () => {
  let component: AnimalDetailComponent;
  let fixture: ComponentFixture<AnimalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalDetailComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              animal: {
                name: 'test',
                species: 'test-species',
                veterinarian: 'test-vet',
                comment: 'test-comment',
                id: 1,
              },
            }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
