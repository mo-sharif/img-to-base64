import { Injectable } from '@angular/core';
import { Images } from '../classes/images';
// Base 64 Image display issues with unsafe image for Chrome support
//import { DomSanitizer } from '@angular/platform-browser'

@Injectable()
export class GalleryService {
  private images: Images[];

  file: File;
  private nextId: number;

  constructor( ) {

    let images = this.getGallery();

    if (images.length == 0) {

        this.nextId = 0;

    }else{

      //Get Id of last image in the array
      let maxId = images[images.length -1].id
      this.nextId = maxId + 1;

    }
  }

  onFileSelected(event: EventTarget) {
    
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    let files: FileList = target.files;
    this.file = files[0];
    this.base64String(this.file);

}

base64String(img){

  const reader: FileReader = new FileReader();
  reader.readAsDataURL(this.file);
  reader.onload = (): void => {
  const base64String: string = (reader.result as string).match(
     /.+;base64,(.+)/
 )[1];
 //pass our new base64 variable to stor method
  this.addImages("data:image/jpeg;base64," + base64String);
};

}
store(img){
    //Setting local storage
    localStorage.setItem('images', img);
}

public addImages(text: string): void {
  let image = new Images(this.nextId, text);
  let images = this.getGallery();
  images.push(image);
  this.setLocalStorageImages(images, "Success! see image in Gallery");
  this.nextId++;

}
  //Get local storage and check for nulls
  public getGallery(): Images[] {
    //set dummy data in locaStorage to avoid null issues
    if (localStorage.getItem("images") === null) {
      window.localStorage.setItem("images", '1');
    }
    
    let localStorageImage = JSON.parse(localStorage.getItem('images'));
    //let newImg = "data:image/jpeg;base64," + localStorageImage.images;
    //let imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(newImg);
    //Check against null and return an empty array or the images array if non null
    return localStorageImage.images == null ? [] : localStorageImage.images;
  }

  //Helper function to set our storage
  private setLocalStorageImages(images: Images[], msg): void{
    //Test if storage works
    let testKey = 'test', storage = window.localStorage;

    try {
      //Test storage and store image
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      localStorage.setItem('images', JSON.stringify({images : images}))
      alert(msg);

    } catch (error) {
      //Error
      alert('Image size is too big, please try a smaller image');
    }
    

  }
  //Remove an image
  public removeImage(id: number): void {
    //Get all images
    let images = this.getGallery();

    //Filter out the image we want to remove
    images = images.filter((image => image.id != id));
    this.setLocalStorageImages(images, "Image deleted successfully");

  }

}
