import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor() { }


}

@Directive({
  selector: '[iNumber]',
})
export class NumberDirective {
  regex = new RegExp('[^0-9]');

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    console.log(e)
    if (
      !RegExp(this.regex).test(e.key) ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'Delete' ||
      e.key === 'Backspace' ||
      (e.ctrlKey &&
        ( e.key === 'v' || e.key === 'V' || e.key === 'อ' || e.key === 'ฮ' ||
          e.key === 'c' || e.key === 'C' || e.key === 'แ' || e.key === 'ฉ' ||
          e.key === 'x' || e.key === 'X' || e.key === 'ป' || e.key === ')' ||
          e.key === 'z' || e.key === 'Z' || e.key === 'ผ' || e.key === '(' ||
          e.key === 'a' || e.key === 'A' || e.key === 'ฟ' || e.key === 'ฤ'  ))
    ) {
      return true;
    } else {
      e.preventDefault();
      return false;
    }
  }
}
