import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if(!images){
      return 'https://pngimage.net/wp-content/uploads/2018/06/no-image-png-2.png';
    }
    if (images.length > 1) {
      return images[1].url;
    } else if (images.length > 0) {
      return images[0].url;
    } else {
      return 'https://pngimage.net/wp-content/uploads/2018/06/no-image-png-2.png';
    }
  }

}