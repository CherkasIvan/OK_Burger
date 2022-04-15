import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public x = document.getElementById('myTopnav');

  public myFunction() {
    if (this.x?.className === 'topnav') {
      this.x!.className += ' responsive';
    } else {
      this.x!.className = 'topnav';
    }
  }
  constructor() {}
}
