import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { VideoInterface } from 'interfaces/video.interface';
import { VideoComponent } from 'components/video/video.component';

import { SocialBtnInterface } from 'interfaces/socialBtn.interface';

import { SocialMediaBtnService } from 'service/social-media-btn/social-media-btn.service';
import { VideoService } from 'service/video/video.service';

import { slideInAnimation } from 'constants/animations/routing-animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild(VideoComponent) video!: VideoComponent;

  public btnObject: SocialBtnInterface[] = this.socialBtnService.socialBtns;
  public videoElement: VideoInterface[] = this.videoService.videos;

  constructor(
    private socialBtnService: SocialMediaBtnService,
    private videoService: VideoService
  ) {}

  ngAfterViewInit() {
    return this.video;
  }
}
