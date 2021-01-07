import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpacesPipe',
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    do {
      value = value.replace(character, ' ');
    } while (value.indexOf('-') !== -1);

    return value;
  }
}
