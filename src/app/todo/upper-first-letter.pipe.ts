import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstLetter'
})
export class UpperFirstLetterPipe implements PipeTransform {

  transform(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }
}
