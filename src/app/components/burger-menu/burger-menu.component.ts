import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./burger-menu.component.scss'],
})
export class BurgerMenuComponent {
  constructor() {}
}
