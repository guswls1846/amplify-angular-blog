import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "safeHtml"
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  public transform(html: string) {
    if (!!html) {
      // let t = Math.floor(Math.random() * 100 + 1);
      // let imgCORS = html.replace(/jpeg"/g, `jpeg?x-request=xhr" crossorigin="anonymous"`);
      // console.log(imgCORS);

      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
  }
}
