import { Component, Input, OnInit } from '@angular/core';
// import { PlyrComponent } from 'ngx-plyr';
import { SimplebarAngularModule } from 'simplebar-angular';

import { HlsjsPlyrDriver } from '../video/play-setup/play-setup.component'
import Hls from 'hls.js';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../../teacher/new-notification/new-notification.component';
import { Title } from '@angular/platform-browser';
import { data } from 'jquery';
import{LiveService} from '../service/live.service'
@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css'],
  standalone:false
})
export class LiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: LiveService, private modalService: NgbModal, private Routes: Router) { }
  live: boolean = false
  banned = false
  private class
  private name
  uname = 'hellothgfbv'
  title
  stream_url
  stream_key
  sources: Plyr.Source[]
  messagearry: Array<{ user: String, message: String }> = []
  pmesage
  messagetext: String
  mesage: Array<{ user: String, message: String }> = []
data_url
urls_base
  ngOnInit(): void {

    this.service.details().subscribe((res) => {
      console.log(res)
this.data_url = res.data
this.urls_base = res.stream_url
      if (res.status == true) {
        this.stream_key = res.data.stream_key
        this.stream_url = res.data.stream_url
        this.title = res.data.Title
        this.class = res.data.class
        this.name = res.data.name
        this.sources = [{
          type: 'video',
          src: environment.live_url + '/' + res.data.stream_key + '/index.m3u8'
        }];



      }
    })
  }
  id = this.route.snapshot.params['id']
 
  plyr1: Plyr;

  options: Plyr.Options = {
    autoplay: true,
    quality: {
      default: 360,
      options: [1080, 720, 480, 360],

    }


  };

  poster = 'https://bitdash-a.akamaihd.net/content/sintel/poster.png';


  hlsjsDriver2 = new HlsjsPlyrDriver(true);


  warnuser(user_id) {

  }





  languageChanged(driver: HlsjsPlyrDriver, plyr: Plyr) {
    setTimeout(() => driver.hls.subtitleTrack = plyr.currentTrack, 50);
  }
  playedtrue() {
    //     Body: "gnb"
    // Title: "gtfhvb"
    // class: "2"


    this.played()
    this.play()
    this.live = true
  }
  pausetrue() {
    this.Routes.navigateByUrl('/teacher/live')

  }
  played() {

    this.hlsjsDriver2.load(this.sources[0].src);

  }
  play() {
    if (this.sources) {
      this.plyr1.play()
    }
  }
  navigate(url){
    this.Routes.navigateByUrl(`student/live/${url}`)
  }


}
