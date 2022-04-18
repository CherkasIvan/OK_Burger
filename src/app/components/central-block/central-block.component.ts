import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SocialBtnInterface } from 'interfaces/socialBtn.interface';

import { SocialMediaBtnService } from 'service/social-media-btn/social-media-btn.service';

@Component({
  selector: 'app-central-block',
  templateUrl: './central-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./central-block.component.scss'],
})
export class CentralBlockComponent {
  public socialBtns: SocialBtnInterface[] = this.socialBtnService.socialBtns;

  constructor(private socialBtnService: SocialMediaBtnService) {}
}
