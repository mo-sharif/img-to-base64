import { Component, OnInit } from '@angular/core';
import { Images } from '../../classes/images';
import { GalleryService } from '../../services/gallery.service';

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