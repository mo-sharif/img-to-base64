import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Images } from '../../classes/images';
// Base 64 IMage display issues with unsafe image
//import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[GalleryService]
})
export class GalleryComponent implements OnInit {
 
 public base64Image;
//private galleryService: GalleryService
  constructor() {  
   
  }
  
  ngOnInit() {  
    //this.images=this.galleryService.getGallery();
    
  }

 /*
  for(i=0, ; i<len; i++) {
    let key = localStorage.key(i);
    let value = localStorage[key];
    console.log(key + " => " + value);
    let images = [
    new Images(1, 'Windstorm'),
  ];
}
  myHero = this.images[0];

*/

}