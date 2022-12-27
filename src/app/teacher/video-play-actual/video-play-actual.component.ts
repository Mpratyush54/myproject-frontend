import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-play-actual',
  templateUrl: './video-play-actual.component.html',
  styleUrls: ['./video-play-actual.component.css']
})
export class VideoPlayActualComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  video_url:string
  image_url:string
  data:any
  ngOnInit(): void {
    this.video_url =environment.baseurl+'teacher/playvideo/'+this.route.snapshot.params['id']; 
    this.image_url =environment.baseurl+'teacher/playvideo/poster/'+this.route.snapshot.params['id'];
   this.data =  {
      fluid: true, 
      aspectRatio:'1920:1080',
      autoplay: true, 
      poster: `${this.image_url}` ,

      sources: [{
      src:`${this.video_url}`,
      type: 'video/mp4' ,
    
    }]}
  }

}
