import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatArtistsName'
})
export class FormatArtistsNamePipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    const names = value.map(item => item.name);
    const res = names.join(', ');

    return res;
  }

}
