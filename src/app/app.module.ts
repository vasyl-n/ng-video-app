import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { HeaderComponent } from './header/header.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { HttpClientModule, HttpClient }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    ContentContainerComponent,
    HeaderComponent,
    TranscriptComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
