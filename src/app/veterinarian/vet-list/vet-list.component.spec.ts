import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetListComponent } from './vet-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VeterinarianService } from '../../shared/api/services/veterinarian.service';

describe('VetListComponent', () => {
  let component: VetListComponent;
  let fixture: ComponentFixture<VetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VetListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [VeterinarianService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
