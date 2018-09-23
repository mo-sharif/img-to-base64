import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//Routes module 
import { RouterModule, Routes } from '@angular/router';
//Progress loading module
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';

import { UploadComponent } from './components/upload/upload.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';


const routes: Routes = [
  { 
    path: '',   
    redirectTo: '/upload', 
    pathMatch: 'full' 
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    GalleryComponent,
    SafeUrlPipe,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true}),
    SlimLoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
