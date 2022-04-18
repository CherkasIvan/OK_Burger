import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  @Input() videoID: string = '';
  @Input() videoPath: string = '';
  @Input() videoMute: boolean = true;

  constructor() {}
}
