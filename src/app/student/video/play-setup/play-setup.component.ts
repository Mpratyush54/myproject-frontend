import  Hls from 'hls.js';
// import { PlyrDriver, PlyrDriverCreateParams, PlyrDriverDestroyParams, PlyrDriverUpdateSourceParams } from 'ngx-plyr';
import * as Plyr from 'plyr';

export class HlsjsPlyrDriver  {

  hls = new Hls();

  private loaded = false;

  constructor(private autoload: boolean) { }

//   create(params: PlyrDriverCreateParams) {
//     this.hls.attachMedia(params.videoElement);
// console.log(params.options);

//     return new Plyr(params.videoElement, params.options);
//   }

  // updateSource(params: PlyrDriverUpdateSourceParams) {
  //   if (this.autoload) {
  //     this.load(params.source.sources[0].src);
  //   } else {
  //     // poster does not work with autoload
  //     params.videoElement.poster = params.source.poster;
  //   }
  // }

// this.hls
    // const defaultOptions = {
    //         //controls: ["download",  "settings", "volume", "progress", "fullscreen", "play", "current-time", "mute", "play-large"],
    //        controls: ["play", "progress", "current-time", "mute", "volume", "setting", "fullscreen", "download", "play-large"]

    // };


  // destroy(params: PlyrDriverDestroyParams) {
  //   params.plyr.destroy();
  //   this.hls.detachMedia();
  //   this.hls.destroy();
  // }

  load(src: string) {
    if (!this.loaded) {
      this.loaded = true;
      this.hls.loadSource(src);
    }
  }


  
}