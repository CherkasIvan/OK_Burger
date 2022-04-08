import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-social-media-btn',
  templateUrl: './social-media-btn.component.html',
  styleUrls: ['./social-media-btn.component.scss'],
})
export class SocialMediaBtnComponent {
  @Input() btnClass: string = '';
  @Input() btnSvg: string = '';

  constructor() {}
}
