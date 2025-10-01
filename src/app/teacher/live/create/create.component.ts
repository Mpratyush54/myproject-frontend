import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';

import { HlsjsPlyrDriver } from '../../../student/video/play-setup/play-setup.component'
import Hls from 'hls.js';
import { ActivatedRoute, Router } from '@angular/router';
import { LiveService } from '../../services/live.service';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../../new-notification/new-notification.component';
import { NotificationService } from '../../services/notification.service';
import { Title } from '@angular/platform-browser';
import { data } from 'jquery';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  standalone:false
})
export class CreateComponent implements OnInit {
  @ViewChild('mychatdiv') mychatdiv

  chat = true
  // // http://localhost:4200/teacher/live/3122462
  constructor(private route: ActivatedRoute, private service: LiveService, private modalService: NgbModal, private Routes: Router, private service2: NotificationService) { }
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
  ngOnInit(): void {



    this.service.joinroom(this.id);
    this.service.revoverchat(this.id);

    this.service.bancheck(this.id).subscribe((res) => {
      
      if (res) {
        console.log(res);

        if (res.data = true) {

          if (res.error == true) {
            if (res.message = '234fhfhfhdyvv') {
              const modalRef = this.modalService.open(NgbdModalContent);
              modalRef.componentInstance.name = `Dear User You were banned by the admin from the chat for this class and if found to be repeatedly banned by the admin your id will be suspended`;
              this.banned = true
            }
          }
        }
      }

    })

    this.service.banusercall().subscribe((res) => {
      if(res){
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = `Dear User You were banned by the admin from the chat for this class and if found to be repeatedly banned by the admin your id will be suspended`;
      this.banned = true}
    })


    this.service.newuserjoined().subscribe((res) => {
      this.messagearry.push(res)
      this.mychatdiv.nativeElement.scrollTop = this.mychatdiv.nativeElement.scrollHeight+200;

    })


    this.service.newmsg(this.id).subscribe((res) => {

      this.mesage.push(res)
      this.mychatdiv.nativeElement.scrollTop = this.mychatdiv.nativeElement.scrollHeight+200;

    })

    this.service.priviousmsg().subscribe((res) => {

      this.pmesage = res
      this.mychatdiv.nativeElement.scrollTop = this.mychatdiv.nativeElement.scrollHeight+200;


    })
    this.service.details(this.id).subscribe((res) => {
      console.log()

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
  sendmessage(value) {


    this.service.sendmesg(this.id, value.Title);
    this.messagetext = ''
  }
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
  banuser(user_id, message ,id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = `User Banned`;
    this.service.banuser(user_id, message, this.id ,id);

   
  }


  disablechat() {
    this.chat = false
  }
  enablechat() {
    this.chat = true
  }

  languageChanged(driver: HlsjsPlyrDriver, plyr: Plyr) {
    setTimeout(() => driver.hls.subtitleTrack = plyr.currentTrack, 50);
  }
  playedtrue() {
    //     Body: "gnb"
    // Title: "gtfhvb"
    // class: "2"

    this.service2.notification_send({ Body: `Dear Students, Your teacher ${name} is live for you`, Title: `${this.title}`, class: `${this.class}` }).subscribe((res) => {
      if (res) {

        if (res.status) {
          if (res.status == true) {




            if (res.error == false) {

              if (res.mes) {

                const modalRef = this.modalService.open(NgbdModalContent);
                modalRef.componentInstance.name = `The Notifcations were sent sucessfully and the Id was ${res.mes}`;
              }
            }

          }
        }
      }
    })
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

  copy(data) {
    navigator.clipboard.writeText(data);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "Copied the text: " + data;

  }

}
