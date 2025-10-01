import { Component, OnInit ,ElementRef, Input, OnDestroy,ViewChild, ViewEncapsulation } from '@angular/core';
import {  Router } from '@angular/router';

import videojs from 'video.js';
import "@videojs/http-streaming";





@Component({
  selector: 'app-video-play',
  template: `
  <video #target class="video-js vjs-default-button vjs-big-play-centered" id="video" [poster] controls  playsinline preload="auto" > 
  </video>
`,
  styleUrls: ['./video-play.component.css' ,],
  encapsulation: ViewEncapsulation.None,
  standalone:false

})
export class VideoPlayComponent implements OnInit, OnDestroy {

  @ViewChild('target', {static: true}) target: ElementRef;

  player: typeof videojs.players;


  @Input() options: {
      fluid: boolean,
      aspectRatio: string,
      autoplay: true,
      
      poster: string, 
      sources: {
          src: string,
          type: string,
   
      } [],
      controls: true,
      plugins: {
        videoJsResolutionSwitcher: {
          default: 'low', // Default resolution [{Number}, 'low', 'high'],
          dynamicLabel: true
        }
      },
  };


  constructor( private Routes: Router ,     private elementRef: ElementRef    ) {  }
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
   
  }
  heoo(){
    this.Routes.navigate([`teacher/video-upload-file/`])
  
  }
  ngOnInit(): void {

   
    
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();


      
    });
    
          // instantiate Video.js
          this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
            // console.log('onPlayerReady', this);
          })
 
  }
  onRightClick() {
    return false;
  }

}
 