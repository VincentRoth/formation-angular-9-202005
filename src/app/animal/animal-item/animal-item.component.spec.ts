import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalItemComponent } from './animal-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TruncatePipe } from '../../shared/truncate.pipe';

describe('AnimalItemComponent', () => {
  let component: AnimalItemComponent;
  let fixture: ComponentFixture<AnimalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalItemComponent, TruncatePipe],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalItemComponent);
    component = fixture.componentInstance;
    component.model = {
      name: 'test',
      species: 'test-species',
      veterinarian: 'test-vet',
      comment: 'test-comment',
      id: 1,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
