import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.css'],
  inputs: ['transcripts']
})
export class TranscriptComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
