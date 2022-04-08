import { Component, OnInit } from '@angular/core';
import { SocialMediaBtnService } from 'src/app/service/social-media-btn.service';

@Component({
  selector: 'app-central-block',
  templateUrl: './central-block.component.html',
  styleUrls: ['./central-block.component.scss'],
})
export class CentralBlockComponent implements OnInit {
  public socialBtns:any = this.socialBtnService.socialBtns
  constructor(private socialBtnService: SocialMediaBtnService) {}

  ngOnInit(): void {}
}
