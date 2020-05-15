import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListComponent } from './animal-list.component';
import { AnimalItemComponent } from '../animal-item/animal-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from '../../shared/api/services/animal.service';
import { TruncatePipe } from '../../shared/truncate.pipe';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalItemComponent, TruncatePipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AnimalService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
