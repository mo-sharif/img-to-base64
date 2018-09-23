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
 
  constructor(private galleryClass: GalleryService) {  }
  
  ngOnInit() { }

}