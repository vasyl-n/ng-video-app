import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  inputs: ['id']
})
export class VideoPlayerComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

}
