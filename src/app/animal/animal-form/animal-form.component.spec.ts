import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFormComponent } from './animal-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalService } from '../../shared/api/services/animal.service';
import { FormsModule } from '@angular/forms';

describe('AnimalFormComponent', () => {
  let component: AnimalFormComponent;
  let fixture: ComponentFixture<AnimalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimalFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      providers: [AnimalService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
