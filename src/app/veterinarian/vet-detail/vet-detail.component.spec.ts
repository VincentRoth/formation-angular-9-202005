import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDetailComponent } from './vet-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';

describe('VetDetailComponent', () => {
  let component: VetDetailComponent;
  let fixture: ComponentFixture<VetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VeterinarianService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
