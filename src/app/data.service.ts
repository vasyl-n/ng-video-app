import { Injectable } from '@angular/core'
import data from './data'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Transcript } from './types'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTranscripts(id: string): Observable<Transcript[]> {
    return this.http.get(`https://static.chorus.ai/api/${id}.json`)
  }
}

export default DataService
