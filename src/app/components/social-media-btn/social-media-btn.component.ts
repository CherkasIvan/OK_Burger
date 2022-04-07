import { Component, Input, OnInit } from '@angular/core';
import { SocialMediaBtnService } from 'src/app/service/social-media-btn.service';

@Component({
  selector: 'app-social-media-btn',
  templateUrl: './social-media-btn.component.html',
  styleUrls: ['./social-media-btn.component.scss'],
})
export class SocialMediaBtnComponent implements OnInit {
  @Input() btnClass: string = '';
  @Input() btnSvg: string = '';
  public newDoc: any;
  public wrapper: any = document.createElement('div');
  // inputElement = document.appendChild(this.wrapper);

  constructor(private socialService: SocialMediaBtnService) {}
  ngOnInit(): void {
    this.wrapper.innerHTML = this.btnSvg;
    let path = this.wrapper.firstChild;
    this.newDoc = path
    console.log(path);
    console.log(this.newDoc);
    // let d1 = document.getElementsByTagName('a');
    // return d1.insertAdjacentHTML('afterend', this.btnSvg);
  }
}
