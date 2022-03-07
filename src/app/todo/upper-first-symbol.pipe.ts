import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstSymbol'
})
export class UpperFirstSymbolPipe implements PipeTransform {

  transform(name: string) {
    return name[0].toUpperCase() + name.slice(1)
  }
}
