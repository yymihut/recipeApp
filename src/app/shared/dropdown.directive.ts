import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.dropdown-toggle') isOpen = '';

  @HostListener('click') deschide() {
    console.log('export class DropdownDirective', this.isOpen)
    // this.isOpen = !this.isOpen;
    switch (this.isOpen) {
      case 'show':
        this.isOpen = ''
        break;
      case '':
        this.isOpen = 'show'
        break;

      default:
        break;
    }
  }
}



