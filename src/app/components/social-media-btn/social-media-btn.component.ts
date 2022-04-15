import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-btn',
  templateUrl: './social-media-btn.component.html',
  styleUrls: ['./social-media-btn.component.scss'],
})
export class SocialMediaBtnComponent implements OnInit {
  @Input() btnClass: string = '';
  @Input() btnSvg: string = '';
  @Input() btnSize: string = '';
  public vol: boolean = false;

  public changeVol(): boolean {
    this.vol = !this.vol;
    return this.vol;
  }
  constructor() {}

  ngOnInit(): void {
    this.changeVol();
  }
}
