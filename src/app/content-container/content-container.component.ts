import { Component, OnInit } from '@angular/core'
import data from '../data'
import dataService from '../data.service'
import { Transcript, CombinedTranscript, Utterance } from '../types'

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  transcripts: CombinedTranscript[]
  videoId: string
  show: boolean = true

  constructor(private dataService: dataService) { 
  }

  getTranscripts(id: string): void {
    this.dataService.getTranscripts(id).subscribe(
      (res: Transcript[]) => {
        res.sort((a, b) => a.time - b.time)
        const combined: CombinedTranscript[] = this.combineUtterances(res)
        this.transcripts = combined
      },
      (error) => {
        this.show = false
      }
    )
  }

  combineUtterances(transcripts: Transcript[]): CombinedTranscript[] {
    let result: CombinedTranscript[] = []
    var resultInd: number = 0
    transcripts.forEach((el, ind) => {
      let prevSpeaker: CombinedTranscript = result[resultInd - 1]

      let newUtterance: Utterance = {
        snippet: el.snippet,
        time: el.time,
      }

      if ( prevSpeaker && el.speaker === prevSpeaker.speaker ) {
        prevSpeaker.utterances.push(newUtterance)
      } else {
        let newSpeaker: CombinedTranscript= {
          speaker: el.speaker,
          utterances: [],
        }
        newSpeaker.utterances.push(newUtterance)
        result.push(newSpeaker)
        resultInd++
      }
    })
    return result
  }

  ngOnInit() {
    this.videoId = window.location.search.split('=')[1]
    this.getTranscripts(this.videoId)
  }
}
