import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }

}
