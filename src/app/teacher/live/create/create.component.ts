import { Component, ElementRef, Input, OnInit,ViewChild } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { faForward, faPlay , faBackward , faVolumeHigh, faExpand ,faVolumeMute, faVolumeLow, faPause, faCompress} from '@fortawesome/free-solid-svg-icons';

import { HlsjsPlyrDriver } from '../../../student/video/play-setup/play-setup.component'
import Hls from 'hls.js'; // ✅ This imports the Hls class properly
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
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  faForward = faForward;
faPlay= faPlay;
faBackward= faBackward;
faVolumeHigh=faVolumeHigh;
faExpand=faExpand;
faVolumeMute=faVolumeMute;
faVolumeLow=faVolumeLow;
faPause=faPause;
faCompress=faCompress
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
  sources
  messagearry: Array<{ user: String, message: String }> = []
  pmesage
  messagetext: String
  mesage: Array<{ user: String, message: String }> = []
  ngOnInit(): void {

    // Running the contoling part of the video player
  document.addEventListener('keydown', this.handleKeydown.bind(this));
  document.addEventListener('keyup', this.handleKeyup.bind(this));


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
      console.log(res)

      if (res.status == true) {
        this.stream_key = res.data.stream_key
        this.stream_url = res.data.stream_url
        this.title = res.data.Title
        this.class = res.data.class
        this.name = res.data.name
        this.sources =   environment.live_url  + res.data.stream_key + '/index.m3u8'
        



      }
      console.log(this.sources);
      this.setupHLS();
    })
// This is hls video playback part



// This part encs here
  }
  
  id = this.route.snapshot.params['id']
  sendmessage(value) {


    this.service.sendmesg(this.id, value.Title);
    this.messagetext = ''
  }


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
   
    this.live = true
  }
  pausetrue() {
    this.Routes.navigateByUrl('/teacher/live')

  }


  copy(data) {
    navigator.clipboard.writeText(data);
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "Copied the text: " + data;

  }

// This is hls Function part

  @ViewChild('videoPlayer', { static: true }) videoElementRef!: ElementRef<HTMLVideoElement>;
  private hls!: Hls;
  private intervalId: any;
  private touchedCustomVideoQuality = false;

  private detectNetworkSpeed(): number | null {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (connection) {
      const speedMbps = connection.downlink; // Mbps
      return Math.round(speedMbps * 1000 * 1000); // Convert to bps
    }
    return null;
  }

  private selectInitialBitrate(levels): number | null {
    const speed = this.detectNetworkSpeed();
    if (!speed) return 0;

    for (let i = 0; i < levels.length; i++) {
      if (levels[i].bitrate < speed) {
        return i;
      }
    }

    return levels.length - 1;
  }


  private setupAdaptiveBitrate(levels) {
    const video = this.videoElementRef.nativeElement;

    this.intervalId = setInterval(() => {
      if (!this.touchedCustomVideoQuality) {
        const networkSpeed = this.detectNetworkSpeed();

        let targetLevel = 0;
        if (networkSpeed && networkSpeed >= 4000000) {
          targetLevel = levels.findIndex(lvl => lvl.height === 720) || 0;
        } else if (networkSpeed && networkSpeed >= 1200000) {
          targetLevel = levels.findIndex(lvl => lvl.height === 480) || 0;
        } else {
          targetLevel = levels.findIndex(lvl => lvl.height === 360) || 0;
        }

        const currentTime = video.currentTime;
        this.hls.currentLevel = targetLevel;
        video.currentTime = currentTime;
      }
    }, 6000);
  }


  private setupHLS() {
     const video = this.videoElementRef.nativeElement;

        if (Hls.isSupported()) {
      this.hls = new Hls();
      this.hls.loadSource(this.sources);
      this.hls.attachMedia(video);

      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const availableLevels = this.hls.levels;
        console.log(availableLevels);
        
        const initialBitrate = this.selectInitialBitrate(availableLevels);
        if (initialBitrate !== null) {
          this.hls.currentLevel = initialBitrate;
        }

        this.setupAdaptiveBitrate(availableLevels);
      });
    } else  {
      console.log('This browser does not support HLS.js');
      
    }
      }
  // The base load for the hls.js library ends here 
  // This part is for controling the video player
  
// Picture in picute option enable
  pipBtnpress(){
  const video = this.videoElementRef.nativeElement;
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture().catch(err => {
      console.error("PiP failed:", err);
    });
  }
  }
  // This contols play and pause of the video
  playpauseicon = faPlay
  togglePlay() {
    event.stopPropagation();
  const video = this.videoElementRef.nativeElement;
  if (video.paused) {
    video.play()
   }
    else{
      video.pause()

    }
  
}
// Turns The video 10 seconsds back
rewind() {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;
  video.currentTime -= 10;
}
// Turns The video 10 seconsds forwoard

forward() {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;
  video.currentTime += 10;
}
// Mutes And unmutes the video
toggleMute() {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;
  video.muted = !video.muted;
}
// This is the function to set the volume of the video
volume: number = 1; // Default full volume

setVolume(event: Event) {
  event.stopPropagation();
  const input = event.target as HTMLInputElement;
  this.volume = parseFloat(input.value);
  const video = this.videoElementRef.nativeElement;
  video.volume = this.volume;
}
// This is the function contols the icon of the volume 
get volumeIcon() {
  
  if (this.videoElementRef.nativeElement?.muted || this.volume === 0) {
    return this.faVolumeMute;
  } else if (this.volume < 0.5) {
    return this.faVolumeLow;
  } else {
    return this.faVolumeHigh;
  }
}
// this function sets the video to full screen
fullscreeen =faExpand
  toggleFullscreen() {
    event.stopPropagation();
    const videoContainer = this.videoElementRef.nativeElement.parentElement!;
    if (!document.fullscreenElement) {
      videoContainer.requestFullscreen();
      this.fullscreeen = faCompress
    } else {
      document.exitFullscreen();
this.fullscreeen = faExpand
    }
  }
  // This function sets the video quality
    selectedQuality = -1;

    changeQuality(event) {
      
event.stopPropagation();
    const index = event;
    this.selectedQuality = index;
    if (this.hls) this.hls.currentLevel = index;
  }
// this displayes the selector option
quality = false
displayQualitySelector(){
  event.stopPropagation();
if(this.quality == false){
  this.speedcontroller = false
  this.quality = true
}else{
  this.quality = false}
  
}
// there are two displayes the current time and the duration of the video
currentTimeDisplay = '00:00';
  durationDisplay = '00:00';
  onLoadedMetadata() {
    const duration = this.videoElementRef.nativeElement.duration;
    this.durationDisplay = this.formatTime(duration);
  }
// current time of the video
  onTimeUpdate() {
    const currentTime = this.videoElementRef.nativeElement.currentTime;
    this.currentTimeDisplay = this.formatTime(currentTime);
    this.playedPercent = (this.videoElementRef.nativeElement.currentTime / this.videoElementRef.nativeElement.duration) * 100;
    this.updateBuffered();

  }
  private formatTime(time: number): string {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
// Updates the buffered time of the video

  playedPercent = 0;
bufferedPercent = 0;
updateBuffered() {
  const video = this.videoElementRef.nativeElement;
  if (video.buffered.length) {
    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
    this.bufferedPercent = (bufferedEnd / video.duration) * 100;
  }
}
// This function is used to seek the video to a specific time when the user clicks on the progress bar
seekFromClick(event: MouseEvent) {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;
  const wrapper = event.currentTarget as HTMLElement;
  const clickX = event.offsetX;
  
  const newTime = (clickX / wrapper.offsetWidth) * video.duration;
    console.log(newTime);

  video.currentTime = newTime;
}
  onPause() {
  const video = this.videoElementRef.nativeElement;
console.log(video.currentTime);
    this.playpauseicon = faPlay

  if (video.duration && !isNaN(video.duration)) {
    this.playedPercent = (video.currentTime / video.duration) * 100;
  }
}

onEnded() {
  this.playedPercent = 100;
}


// Mangages the show and hide of controls
@ViewChild('videoWrapper') wrapperRef!: ElementRef<HTMLDivElement>;
showControls = true;
mouseTimer: any;
holdTimer: any;
isHolding = false;
holdStartTime = 0;
holdSpeedSet = false;

videoSrc = 'https://your-url.com/video.m3u8'; // replace accordingly
// -----------------------------------
// PLAY/PAUSE on single click
handleClick(event: MouseEvent) {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// -----------------------------------
// DOUBLE TAP to SKIP
handleDoubleClick(event: MouseEvent) {
  event.stopPropagation();
  const rect = this.wrapperRef.nativeElement.getBoundingClientRect();
  const clickX = event.clientX - rect.left;

  if (clickX < rect.width / 2) {
    this.skip(-10); // left
  } else {
    this.skip(10); // right
  }
}

// -----------------------------------
// HOLD to play at 2x
handleHoldStart(event: MouseEvent) {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;

  this.holdTimer = setTimeout(() => {
    this.isHolding = true;
    this.holdSpeedSet = true;
    video.playbackRate = 2.0;
  }, 400); // 400ms hold threshold
}

handleHoldEnd(event: MouseEvent) {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;

  if (this.holdTimer) clearTimeout(this.holdTimer);

  if (this.holdSpeedSet) {
    video.playbackRate = 1.0;
    this.holdSpeedSet = false;
  }

  this.isHolding = false;
}

// -----------------------------------
// SKIP helper
skip(seconds: number) {
  event.stopPropagation();
  const video = this.videoElementRef.nativeElement;
  video.currentTime = Math.max(0, video.currentTime + seconds);
}

// -----------------------------------
// KEYBOARD SHORTCUTS
handleKeydown(event: KeyboardEvent) {
  const video = this.videoElementRef.nativeElement;

  switch (event.key.toLowerCase()) {
    case ' ': // Space
      event.preventDefault();
      if (!this.spaceHeld) {
        this.spaceHeld = true;
        video.playbackRate = 2;
      }
      break;
    case 'arrowright':
    case 'l':
      video.currentTime += 10;
      break;
    case 'arrowleft':
    case 'j':
      video.currentTime -= 10;
      break;
  }
}

// hadles the play logo
onPlay() {
      this.playpauseicon = faPause

}
private spaceHeld = false;
private holding = false;

onHoldStart() {
  const video = this.videoElementRef.nativeElement;
  this.holding = true;
  video.playbackRate = 2;
}

onHoldEnd() {
  const video = this.videoElementRef.nativeElement;
  this.holding = false;
  video.playbackRate = 1;
}
handleKeyup(event: KeyboardEvent) {
  const video = this.videoElementRef.nativeElement;
  if (event.key === ' ') {
    event.preventDefault();
    if (this.spaceHeld) {
      this.spaceHeld = false;
      video.playbackRate = 1;
      this.togglePlay();
    }else{

    }
  }
}
// play back screen controller
speedcontroller = false
displaySpeedSelector(){
    event.stopPropagation();

if(this.speedcontroller == false){
  this.speedcontroller = true
  this.quality = false
}else{
    this.speedcontroller = false
}

}
speed = 1
setSpeed(events) {
  console.log('speed');
  
    event.stopPropagation();
  
  this.speed = events;
  const video = this.videoElementRef.nativeElement;
  video.playbackRate = this.speed;
}

}
