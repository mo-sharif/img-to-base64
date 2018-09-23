/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GalleryService } from './gallery.service';

// Base 64 IMage display issues with unsafe image
//import { DomSanitizer } from '@angular/platform-browser';

describe('GalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryService]
    });
  });

  it('should ...', inject([GalleryService], (service: GalleryService) => {
    expect(service).toBeTruthy();
  }));
});
