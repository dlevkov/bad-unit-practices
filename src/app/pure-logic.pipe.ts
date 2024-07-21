import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureLogic',
  standalone: true
})
export class PureLogicPipe implements PipeTransform {

  transform(value: number): string | null {
    if (!value) {
      return null;
    }
    if (value === 1) {
      return 'one';
    }
    return value.toString();
  }

}
