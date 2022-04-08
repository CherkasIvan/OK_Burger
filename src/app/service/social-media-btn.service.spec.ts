import { TestBed } from '@angular/core/testing';

import { SocialMediaBtnService } from './social-media-btn.service';

describe('SocialMediaBtnService', () => {
  let service: SocialMediaBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
