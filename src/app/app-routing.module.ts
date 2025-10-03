import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './asset/forgot-password/forgot-password.component';
import { ResetComponent } from './asset/forgot-password/reset/reset.component';
import { IndexStudentComponent } from './student/index-student/index-student.component';
import { LiveJoinComponent } from './student/live/live-join/live-join.component';
import { LiveComponent } from './student/live/live.component';
import { IndexComponentnotes } from './student/notes/index/index.component';
import { NotesindvidualComponent } from './student/notes/notesindvidual/notesindvidual.component';
import { SetingsComponent } from './student/setings/setings.component';
import { StudentGuard } from './student/student.guard';
import { IndexComponentvieo } from './student/video/index/index.component';
import { PlayComponent } from './student/video/play/play.component';
import { AuthGuard } from './teacher/auth.guard';
import { CreateComponent } from './teacher/live/create/create.component';
import { IndexLiveComponent } from './teacher/live/index/index.component';
import { NewNotificationComponent } from './teacher/new-notification/new-notification.component';
import { NotesAddComponent } from './teacher/notes-add/notes-add.component';
import { NotesComponent } from './teacher/notes/notes.component';
import { NotificationComponent } from './teacher/notification/notification.component';
import { NotificationdetailsComponent } from './teacher/notificationdetails/notificationdetails.component';
import { EditstudentComponent } from './teacher/studentadd/editstudent/editstudent.component';
import { IndexComponentStudent } from './teacher/studentadd/index/index.component';
import { VideoPlayActualComponent } from './teacher/video-play-actual/video-play-actual.component';

import { VideoUploadFileComponent } from './teacher/video-upload-file/video-upload-file.component';
import { VideoUploadComponent } from './teacher/video-upload/video-upload.component';
import { VideoComponent } from './teacher/video/video.component';

const routes: Routes = [
  {
    path: 'teacher' ,
    canActivate:[AuthGuard],
    loadComponent:()=> import('./teacher/index/index.component').then(m =>m.IndexComponent )
   },
  {
    path: 'teacher/videos' ,
    canActivate:[AuthGuard], 
    loadComponent:()=>import('./teacher/video/video.component').then(m=>m.VideoComponent),
   },
  {path: 'teacher/notes' ,canActivate:[AuthGuard], component: NotesComponent },
  {path: 'teacher/notes-add' ,canActivate:[AuthGuard], component: NotesAddComponent },
  {path: 'teacher/video-upload' ,canActivate:[AuthGuard], component: VideoUploadComponent },
  {path: 'teacher/video-upload-file/:id' ,canActivate:[AuthGuard], component: VideoUploadFileComponent },
  {path: 'teacher/videos/play/:id' ,canActivate:[AuthGuard], component: VideoPlayActualComponent },
  {path: 'teacher/notification' ,canActivate:[AuthGuard], component: NotificationComponent },
  {path: 'teacher/notification/:id' ,canActivate:[AuthGuard], component: NotificationdetailsComponent },
  {path: 'teacher/new-notification' ,canActivate:[AuthGuard], component: NewNotificationComponent },
  {path: 'teacher/live' ,canActivate:[AuthGuard], component: IndexLiveComponent },
  {path: 'teacher/live/:id' ,canActivate:[AuthGuard], component: CreateComponent },
  // {path: 'teacher/student' ,canActivate:[AuthGuard], component: IndexComponentStudent },
  // {path: 'teacher/student/edit/:id' ,canActivate:[AuthGuard], component: EditstudentComponent },
  // teacher/notification
// home page of students 
  {path: 'student' ,canActivate:[StudentGuard],  component: IndexStudentComponent },
// live page for students
  {path: 'student/live' ,canActivate:[StudentGuard],  component: LiveComponent },
  // live joining page
  {path: 'student/live/:id' ,canActivate:[StudentGuard],  component: LiveJoinComponent },
  // Settings page for students - under devlopment 
  {path: 'student/settings' ,canActivate:[StudentGuard],  component: SetingsComponent },
  
  {path: 'student/videos' ,canActivate:[StudentGuard],  component: IndexComponentvieo },
  {path: 'student/notes' ,canActivate:[StudentGuard],  component: IndexComponentnotes },
  {path: 'student/notes/:id' ,canActivate:[StudentGuard],  component: NotesindvidualComponent },
  {path: 'student/play/:id' ,canActivate:[StudentGuard],  component: PlayComponent },



  {path: '' , 
    loadComponent:()=>import('./asset/index/index.component').then(m=>m.IndexComponents)
  },
  {path: 'forogot-password' , component: ForgotPasswordComponent },
  {path: 'forogot-password/:username/:hash' , component: ResetComponent },
  {
    path: 'logout' , 
    loadComponent:()=>import('./asset/logout/logout.component').then(m=>m.LogoutComponent),
  },
  {
    path: 'login' ,
    loadComponent:()=>import('./asset/login/login.component').then(m=>m.LoginComponent),
     },
  {path: 'Something-went-wrong' ,
    loadComponent:()=>import('./asset/somethingwentwrong/somethingwentwrong.component').then(m=>m.SomethingwentwrongComponent),

     },
  {
    path: 'download' , 
    loadComponent:()=>import('./asset/download/download.component').then(m=>m.DownloadComponent),
  },
  {path: '**' , 
    loadComponent:()=>import('./asset/four-zero-four/four-zero-four.component').then(m=>m.FourZeroFourComponent),
     }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
