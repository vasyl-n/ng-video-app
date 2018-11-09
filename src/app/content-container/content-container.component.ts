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
  show: boolean;

  constructor(private dataService: dataService) { 
  }

  getTranscripts(id: string): void {
    if ( id ) {
      this.show = true
    }

    this.dataService.getTranscripts(id).subscribe(res => {
      res.sort((a, b) => a.time - b.time)
      this.combineUtterances(res)
      this.transcripts = res
   })
  }

  combineUtterances(transcripts: Transcript[]): Transcript[] {
    transcripts.forEach((el, ind) => {
      let prevUtterance = transcripts[ind - 1]

      if ( prevUtterance && el.speaker === prevUtterance.speaker ) {
        el.hideSpeakerName = true
      }
    })
    return transcripts
  }

  ngOnInit() {
    this.videoId = window.location.search.split('=')[1]
    this.getTranscripts(this.videoId)
  }
}
