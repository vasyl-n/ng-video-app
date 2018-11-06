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
  videoId: string;

  constructor(private dataService: dataService) { 
  }

  getTranscripts(id: string): void {
    this.transcripts = this.dataService.getTranscripts(id);
  }

  ngOnInit() {
    this.videoId = window.location.search.split('=')[1]
    this.getTranscripts(this.videoId)
    console.log(this.transcripts)
  }
}
