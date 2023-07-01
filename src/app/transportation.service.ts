import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransportationService {
  private resultsUrl = 'api/results';
  private itinerariesUrl = 'api/itineraries';

  constructor(private http: HttpClient) {}

  getResults(startingPoint: string, destination: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.resultsUrl}?startingPoint=${startingPoint}&destination=${destination}`);
  }

  getItineraries(): Observable<any[]> {
    return this.http.get<any[]>(this.itinerariesUrl);
  }
}
