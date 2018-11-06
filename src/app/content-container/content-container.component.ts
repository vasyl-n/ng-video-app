import { Component, OnInit } from '@angular/core';
import data from '../data'
import dataService from '../data.service'

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  transcripts: [];

  constructor(private dataService: dataService) { 
  }

  getTranscripts(): void {
    this.transcripts = this.dataService.getTranscripts();
  }

  ngOnInit() {
    let id = window.location.search.split('=')[1]
    this.getTranscripts()
    console.log(this.transcripts)
  }
}
