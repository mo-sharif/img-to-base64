webpackJsonp([1,4],{330:function(t,e,n){"use strict";var a=n(0),o=n(513);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){var t=this.getGallery();if(0==t.length)this.nextId=0;else{var e=t[t.length-1].id;this.nextId=e+1}}return t.prototype.onFileSelected=function(t){var e=t,n=e.target,a=n.files;this.file=a[0],this.base64String(this.file)},t.prototype.base64String=function(t){var e=this,n=new FileReader;n.readAsDataURL(this.file),n.onload=function(){var t=n.result.match(/.+;base64,(.+)/)[1];e.addImages("data:image/jpeg;base64,"+t)}},t.prototype.store=function(t){localStorage.setItem("images",t)},t.prototype.addImages=function(t){var e=new o.a(this.nextId,t),n=this.getGallery();n.push(e),this.setLocalStorageImages(n,"Success! see image in Gallery"),this.nextId++},t.prototype.getGallery=function(){null===localStorage.getItem("images")&&window.localStorage.setItem("images","1");var t=JSON.parse(localStorage.getItem("images"));return null==t.images?[]:t.images},t.prototype.setLocalStorageImages=function(t,e){var n="test",a=window.localStorage;try{a.setItem(n,"1"),a.removeItem(n),localStorage.setItem("images",JSON.stringify({images:t})),alert(e)}catch(t){alert("Image size is too big, please try a smaller image")}},t.prototype.removeImage=function(t){var e=this.getGallery();e=e.filter(function(e){return e.id!=t}),this.setLocalStorageImages(e,"Image deleted successfully")},t=r([n.i(a.e)(),i("design:paramtypes",[])],t)}()},392:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=392},393:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(481),o=n(0),r=n(517),i=n(512);r.a.production&&n.i(o.a)(),n.i(a.a)().bootstrapModule(i.a)},511:function(t,e,n){"use strict";var a=n(0),o=n(368),r=n(324);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){var n=this;this._loadingBar=t,this._router=e,this.title="Image App",this._router.events.subscribe(function(t){n.navigationInterceptor(t)})}return t.prototype.navigationInterceptor=function(t){t instanceof r.b&&this._loadingBar.start(),t instanceof r.c&&this._loadingBar.complete(),t instanceof r.d&&this._loadingBar.stop(),t instanceof r.e&&this._loadingBar.stop()},t=i([n.i(a.c)({selector:"app-root",template:n(673),styles:[n(670)]}),c("design:paramtypes",["function"==typeof(e=void 0!==o.b&&o.b)&&e||Object,"function"==typeof(s=void 0!==r.f&&r.f)&&s||Object])],t);var e,s}()},512:function(t,e,n){"use strict";var a=n(147),o=n(0),r=n(471),i=n(477),c=n(324),s=n(368),l=n(511),f=n(515),u=n(514),d=n(516);n.d(e,"a",function(){return m});var p=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=[{path:"",redirectTo:"/upload",pathMatch:"full"},{path:"upload",component:f.a},{path:"gallery",component:u.a}],m=function(){function t(){}return t=p([n.i(o.b)({declarations:[l.a,f.a,u.a,d.a],imports:[r.a,i.a,a.a,c.a.forRoot(v,{useHash:!0}),s.a],providers:[],bootstrap:[l.a]}),g("design:paramtypes",[])],t)}()},513:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(){function t(t,e){this.id=t,this.text=e}return t}()},514:function(t,e,n){"use strict";var a=n(0),o=n(330);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.galleryClass=t}return t.prototype.ngOnInit=function(){},t=r([n.i(a.c)({selector:"app-gallery",template:n(674),styles:[n(671)],providers:[o.a]}),i("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},515:function(t,e,n){"use strict";var a=n(0),o=n(330);n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.galleryClass=t}return t.prototype.ngOnInit=function(){},t=r([n.i(a.c)({selector:"app-upload",template:n(675),styles:[n(672)],providers:[o.a]}),i("design:paramtypes",["function"==typeof(e=void 0!==o.a&&o.a)&&e||Object])],t);var e}()},516:function(t,e,n){"use strict";var a=n(0);n.d(e,"a",function(){return i});var o=this&&this.__decorate||function(t,e,n,a){var o,r=arguments.length,i=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,a);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(r<3?o(i):r>3?o(e,n,i):o(e,n))||i);return r>3&&i&&Object.defineProperty(e,n,i),i},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.transform=function(t){return this.sanitizer.bypassSecurityTrustHtml(t)},t=o([n.i(a.v)({name:"safeUrl"}),r("design:paramtypes",[])],t)}()},517:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={production:!0}},670:function(t,e){t.exports=".collapse{display:inline-block!important}"},671:function(t,e){t.exports=".card{margin:10px}.card-img-top{max-width:300px}"},672:function(t,e){t.exports=""},673:function(t,e){t.exports='\x3c!-- app.component.html --\x3e\n\n<ng2-slim-loading-bar color="violet"></ng2-slim-loading-bar>\n<nav class="navbar navbar-expand-lg navbar-light bg-light">\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav mr-auto">\n      <li class="nav-item active">\n          <a routerLink="upload" class="nav-link">Upload</a>\n      </li>\n      <li class="nav-item active">\n          <a routerLink="gallery" class="nav-link">Gallery</a>\n      </li>\n    </ul>\n  </div>  \n</nav> <br />\n<div class="container">\n    <router-outlet></router-outlet>\n</div>'},674:function(t,e){t.exports='\x3c!-- gallery.component.html --\x3e\n\n<div class="row">\n    <h5 class="card-title">Gallery</h5>\n    <div class="col-md-6" *ngFor="let image of galleryClass.getGallery()">\n      <div class="card">\n        <div class="card-body mx-auto">\n            <div class="col-md-12">\n            <img class="card-img-top"  src="{{image.text}}"/>\n            </div>\n            <div class="col-md-12 mt-3">\n                <button class="btn btn-outline-secondary" type="button" (click)="galleryClass.removeImage(image.id)">Delete me</button>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>'},675:function(t,e){t.exports='\x3c!-- upload.component.html --\x3e\n<div class="row">\n  <h5 class="card-title">Upload</h5>\n  <div class="col-md-6">\n<div class="card" style="width: 18rem;">\n  <div class="card-body">\n    <p class="card-text">\n        <input type="file" (change)="galleryClass.onFileSelected($event)">       \n    </p>\n  </div> \n</div>\n</div>\n</div>'},707:function(t,e,n){t.exports=n(393)}},[707]);