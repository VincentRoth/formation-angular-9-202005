import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veterinarian } from '../model/veterinarian';

@Injectable({
  providedIn: 'root',
})
export class VeterinarianService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Veterinarian[]> {
    return this.http.get<Veterinarian[]>('/api/veterinarians');
  }

  get(id: number): Observable<Veterinarian> {
    return this.http.get<Veterinarian>(`/api/veterinarians/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/veterinarians/${id}`);
  }
}
