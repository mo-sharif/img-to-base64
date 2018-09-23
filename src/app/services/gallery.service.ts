import { Injectable } from '@angular/core';
import { Images } from '../classes/images';
//import { DomSanitizer } from '@angular/platform-browser'

@Injectable()
export class GalleryService {
  //private images: Images[];

  private nextId: number;

  constructor( ) {/*
    this.images = [
      new Images(0, "default")
    ];*/
    //let sanitizer: DomSanitizer;
    let images = this.getGallery();

    if (images.length == 0) {

        this.nextId = 0;

    }else{

      //Get Id of last image in the array
      let maxId = images[images.length -1].id
      this.nextId = maxId + 1;

    }
  }

  //Get local storage and check for nulls
  public getGallery(): Images[] {
    
    let localStorageImage = JSON.parse(localStorage.getItem('images'));
    //console.log(localStorageImage.images);
    //let newImg = "data:image/jpeg;base64," + localStorageImage.images;
    //let imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(newImg);
    return localStorageImage.images == null ? [] : localStorageImage.images;
        //return this.images;
  }

  //Helper function to set our storage
  private setLocalStorageImages(images: Images[]): void{
    localStorage.setItem('images', JSON.stringify({images : images}))

  }
  //Remove an image
  public removeImage(id: number): void {
    let images = this.getGallery();
    //filter out the image we want to remove
    images = images.filter((image => image.id != id));
    this.setLocalStorageImages(images);

  }

}
