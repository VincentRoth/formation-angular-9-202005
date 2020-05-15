import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetFormComponent } from './vet-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('VetFormComponent', () => {
  let component: VetFormComponent;
  let fixture: ComponentFixture<VetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetFormComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [VeterinarianService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
