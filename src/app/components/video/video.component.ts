import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @Input() videoID: string = '';
  @Input() videoPath: string = '';
  @Input() videoMute: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
