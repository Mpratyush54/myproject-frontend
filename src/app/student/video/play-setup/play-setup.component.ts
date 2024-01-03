import { Component, OnInit ,ElementRef, Input, OnDestroy,ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import "@videojs/http-streaming";
import {  ActivatedRoute, Router } from '@angular/router';
import { StudentVideoService } from '../../service/student-video.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-student-video-play',
  template: `
  <video #target class="video-js vjs-default-button vjs-big-play-centered"   id="video" [poster] controls  playsinline preload="auto" >
  </video>
`,
  styleUrls: ['./play-setup.component.css'],
  encapsulation: ViewEncapsulation.None,

})

export class PlaySetupComponent  implements OnInit ,OnDestroy {


  @ViewChild('target', {static: true}) target: ElementRef;

  player: videojs.Player;


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
      id: string,
      plugins: {
        videoJsResolutionSwitcher: {
          default: 'low',
          dynamicLabel: true
        }
      },
  };

  playtime
  plays= []
  pauses = []
  constructor( private Routes: Router  , private elementRef: ElementRef  , private service:StudentVideoService ,private route: ActivatedRoute ) {  }
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
    if(this.plays.length == this.pauses.length){

      this.service.watch_video(this.playtime,this.options.id)

}else{
  this.hello()
  console.log(this.playtime);
  this.service.watch_video(this.playtime,this.options.id)

}
  }

  ngOnInit(): void {
    var whereYouAt = this.player

    var vid = document.getElementById("video");
console.log(vid);

    document.getElementById("video").addEventListener("pause", this.hello);
    document.getElementById("video").addEventListener("play", this.play_hello);

    console.log(this.plays);

    // vid.onplay = this.hello()

//     function(){
//       const d = new Date();
//       const date = d.getDate();
//       const month = d.getMonth();
//       const year = d.getFullYear();
//       const hour = d.getHours();
//       const min = d.getMinutes();
//       const sec = d.getSeconds();
// var playtime =  `${date}.${month}.${year}.${hour}.${min}.${sec}`
// this.    }

    // vid.onpause = function(){
    //   const d = new Date();
    //   const date = d.getDate();
    //   const month = d.getMonth();
    //   const year = d.getFullYear();
    //   const hour = d.getHours();
    //   const min = d.getMinutes();
    //   const sec = d.getSeconds();
    //  console.log(
    //   `${date}.${month}.${year}.${hour}.${min}.${sec}`)
    // }
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();


    });

          // instantiate Video.js
          this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {


          })

  }

   hello(){

    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
  var laytime:string =  `${date}${month}${year}${hour}${min}${sec}`
 var time= {time:laytime}
 if(this.pauses){
  var sss:number = 0
 var  arrr =[]

  for (let i = 0; i <this.pauses.length ; i++) {

    arrr= [...arrr ,this.pauses[sss] ]
sss = sss+1
  }
arrr = [...arrr , time]
this.pauses = arrr
}else{
  this.pauses = [ time]
}

if(this.plays.length == this.pauses.length){
  var dss = 0
  var data = []
  for (let i = 0; i <this.pauses.length ; i++) {
    var ssss =this.pauses[dss].time-this.plays[dss].time
data = [...data , ssss]
    dss = dss+1

  }
  console.log('iwas ss');


var kkk =0
var value =0
for (let i = 0; i <data.length ; i++) {

value = value+data[kkk]

}
this.playtime = value
console.log(this.playtime);


}

  }
  play_hello(){
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
  var laytime:string =  `${date}${month}${year}${hour}${min}${sec}`
  var time= {time:laytime}


if(this.plays){

  var ss:number = 0
 var  arr =[]
  for (let i = 0; i <this.plays.length ; i++) {

    arr= [...arr ,this.plays[ss] ]

ss = ss+1
  }
arr = [...arr , time]
  // var h =[...this.plays , time]

  this.plays = arr

}else{

  this.plays = [ time]


}




  }
  onRightClick() {
    return false;
  }
}
