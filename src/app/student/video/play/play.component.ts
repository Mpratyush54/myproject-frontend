import { Component, OnInit ,ElementRef, Input, OnDestroy,ViewChild, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

import { PlyrComponent } from 'ngx-plyr';
import { SimplebarAngularModule } from 'simplebar-angular';

import{HlsjsPlyrDriver} from './../play-setup/play-setup.component'
import  Hls from 'hls.js';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit  {
  constructor(private route: ActivatedRoute) { }

  video_url
  image_url
  data:any

  plyr1: Plyr;
  plyr2: Plyr;

  options: Plyr.Options = {
    captions: { active: true, update: true, language: 'en' },
    settings: ['quality', 'speed', 'loop'],
    quality: {
      default: 360,
      options: [ 1080, 720, 480, 360]
    }


  };

  poster = 'https://bitdash-a.akamaihd.net/content/sintel/poster.png';

  sources: Plyr.Source[] = [{
    type: 'video',
    src: 'http://localhost:4200/assets/beach/playlist.m3u8',
  }];

  hlsjsDriver1 = new HlsjsPlyrDriver(true);

  hlsjsDriver2 = new HlsjsPlyrDriver(false);





  languageChanged(driver: HlsjsPlyrDriver, plyr: Plyr) {
    setTimeout(() => driver.hls.subtitleTrack = plyr.currentTrack, 50);
  }

  played() {
    this.hlsjsDriver2.load(this.sources[0].src);
  }








ngOnInit(): void {



  

  this.video_url =environment.baseurl+'teacher/playvideo/'+this.route.snapshot.params['id'];
  this.image_url =environment.baseurl+'teacher/playvideo/poster/'+this.route.snapshot.params['id'];
  console.log(this.video_url);

 this.data =  {
    fluid: true,
    aspectRatio:'1920:1080',
    autoplay: true,
    poster: `${this.image_url}` ,
    id:this.route.snapshot.params['id'],
    sources: [{
    src:`${this.video_url}`,
    type: 'video/mp4' ,

  }]}
}
hello(){
  console.log(true);

}
}
