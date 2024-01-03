import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourZeroFourComponent } from './asset/four-zero-four/four-zero-four.component';
import { NgbdCarouselPause } from './asset/index/casual/casual.component';
import { IndexComponents } from './asset/index/index.component';
import { LoginComponent } from './asset/login/login.component';
import { LogoutComponent } from './asset/logout/logout.component';
import { SomethingwentwrongComponent } from './asset/somethingwentwrong/somethingwentwrong.component';
import { IndexStudentComponent } from './student/index-student/index-student.component';
import { IndexComponentnotes } from './student/notes/index/index.component';
import { NotesindvidualComponent } from './student/notes/notesindvidual/notesindvidual.component';
import { SetingsComponent } from './student/setings/setings.component';
import { StudentGuard } from './student/student.guard';
import { IndexComponentvieo } from './student/video/index/index.component';
import { PlayComponent } from './student/video/play/play.component';
import { AuthGuard } from './teacher/auth.guard';
import { IndexComponent } from './teacher/index/index.component';
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
  {path: 'teacher' ,canActivate:[AuthGuard], component: IndexComponent },
  {path: 'teacher/videos' ,canActivate:[AuthGuard], component: VideoComponent },
  {path: 'teacher/notes' ,canActivate:[AuthGuard], component: NotesComponent },
  {path: 'teacher/notes-add' ,canActivate:[AuthGuard], component: NotesAddComponent },
  {path: 'teacher/video-upload' ,canActivate:[AuthGuard], component: VideoUploadComponent },
  {path: 'teacher/video-upload-file/:id' ,canActivate:[AuthGuard], component: VideoUploadFileComponent },
  {path: 'teacher/videos/play/:id' ,canActivate:[AuthGuard], component: VideoPlayActualComponent },
  {path: 'teacher/notification' ,canActivate:[AuthGuard], component: NotificationComponent },
  {path: 'teacher/notification/:id' ,canActivate:[AuthGuard], component: NotificationdetailsComponent },
  {path: 'teacher/new-notification' ,canActivate:[AuthGuard], component: NewNotificationComponent },
  {path: 'teacher/live' ,canActivate:[AuthGuard], component: IndexLiveComponent },
  // {path: 'teacher/student' ,canActivate:[AuthGuard], component: IndexComponentStudent },
  // {path: 'teacher/student/edit/:id' ,canActivate:[AuthGuard], component: EditstudentComponent },
  // teacher/notification

  {path: 'student' ,canActivate:[StudentGuard],  component: IndexStudentComponent },
  {path: 'student/settings' ,canActivate:[StudentGuard],  component: SetingsComponent },
  {path: 'student/videos' ,canActivate:[StudentGuard],  component: IndexComponentvieo },
  {path: 'student/notes' ,canActivate:[StudentGuard],  component: IndexComponentnotes },
  {path: 'student/notes/:id' ,canActivate:[StudentGuard],  component: NotesindvidualComponent },
  {path: 'student/play/:id' ,canActivate:[StudentGuard],  component: PlayComponent },



  {path: '' , component: IndexComponents },
  {path: 'logout' , component: LogoutComponent },
  {path: 'login' , component: LoginComponent },
  {path: 'Something-went-wrong' , component: SomethingwentwrongComponent },
  {path: '**' , component: FourZeroFourComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
