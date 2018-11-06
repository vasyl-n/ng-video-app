import { Injectable } from '@angular/core';
import data from './data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTranscripts(id: string) {
    return data;
  }
}

export default DataService
