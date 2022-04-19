import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-time-block',
  templateUrl: './work-time-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./work-time-block.component.scss'],
})
export class WorkTimeBlockComponent {
  constructor() {}
}
