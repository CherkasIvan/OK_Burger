import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent {
  constructor() {}
}
