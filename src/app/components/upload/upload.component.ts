import { Component, OnInit } from '@angular/core';
import { Images } from '../../classes/images';
// Base 64 IMage display issues with unsafe image
import { DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {


  ngOnInit() { }

  //Our file type variable
  file: File;
  private domSanitizer: DomSanitizer
  private nextId: number;
  
  onFileSelected(event: EventTarget) {

        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
        //console.log(this.file);
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
  makeTrustedImage(item) {
    const imageString =  JSON.stringify(item).replace(/\\n/g, '');
    //const style = 'url(' + imageString + ')';
    //return this.domSanitizer.bypassSecurityTrustStyle(style);
    return this.domSanitizer.bypassSecurityTrustStyle(imageString);
  }
  store(img){

    //Setting local storage
    localStorage.setItem('images', img);

  }

  public addImages(text: string): void {
    let image = new Images(this.nextId, text);
    let images = this.getGallery();
    images.push(image);
    //JSON.stringify(images).replace(/\\n/g, '');
    //const style = 'url(' + imageString + ')';
    //return this.domSanitizer.bypassSecurityTrustStyle(style);
    //this.domSanitizer.bypassSecurityTrustUrl(images);
    this.setLocalStorageImages(images);
    this.nextId++;

  }

  //Helper function to set our storage
  private setLocalStorageImages(images: Images[]): void{
    localStorage.setItem('images', JSON.stringify({images : images}))
  }
    //Get local storage and check for nulls
    public getGallery(): Images[] {
      let localStorageImage = JSON.parse(localStorage.getItem('images'));
      return localStorageImage == null ? [] : localStorageImage.images;
    }
}



