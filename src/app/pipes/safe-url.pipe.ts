import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  private sanitizer:DomSanitizer
  constructor(){}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustHtml(url);
  }
}
