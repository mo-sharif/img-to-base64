import { Component, OnInit } from '@angular/core';
import { Images } from '../../classes/images';
// import our gallery service class
import { GalleryService } from '../../services/gallery.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers:[GalleryService]
})

export class UploadComponent implements OnInit {

  constructor(private galleryClass: GalleryService) {  
   
  }
  ngOnInit() { }

}



