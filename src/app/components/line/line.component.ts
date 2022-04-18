import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
