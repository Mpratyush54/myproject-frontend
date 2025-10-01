import { Component, ViewChild, OnInit } from '@angular/core';
// import { PlyrComponent } from 'ngx-plyr';
import { LoaderService } from './loader/loader.service';
import{HlsjsPlyrDriver} from './student/video/play-setup/play-setup.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false
})
export class AppComponent{

  title = 'school';
  constructor(  public loaderservice:LoaderService  ) {}
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
    src: 'http://localhost:8000/live/teast_stram/index.m3u8    ',
  }];

  hlsjsDriver1 = new HlsjsPlyrDriver(true);

  hlsjsDriver2 = new HlsjsPlyrDriver(false);





  languageChanged(driver: HlsjsPlyrDriver, plyr: Plyr) {
    setTimeout(() => driver.hls.subtitleTrack = plyr.currentTrack, 50);
  }

  played() {
    this.hlsjsDriver2.load(this.sources[0].src);
  }




}
