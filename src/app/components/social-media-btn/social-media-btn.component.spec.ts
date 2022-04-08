import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBtnComponent } from './social-media-btn.component';

describe('SocialMediaBtnComponent', () => {
  let component: SocialMediaBtnComponent;
  let fixture: ComponentFixture<SocialMediaBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
