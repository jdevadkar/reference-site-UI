import {DomSanitizer  } from '@angular/platform-browser';
import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer)  { }

    transform(html :any) {
      console.log(html);
      console.log(this.sanitizer.bypassSecurityTrustHtml(html));
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}

