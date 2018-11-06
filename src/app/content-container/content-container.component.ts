import { Component, OnInit } from '@angular/core'
import data from '../data'
import dataService from '../data.service'
import { Transcript } from '../types'

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  transcripts: Transcript[]
  videoId: string

  constructor(private dataService: dataService) { 
  }

  getTranscripts(id: string): void {
    this.dataService.getTranscripts(id).subscribe(res => {
      this.transcripts = res
   })
  }

  ngOnInit() {
    this.videoId = window.location.search.split('=')[1]
    this.getTranscripts(this.videoId)
  }
}
