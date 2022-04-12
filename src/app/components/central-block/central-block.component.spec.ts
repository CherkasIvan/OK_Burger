import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralBlockComponent } from './central-block.component';

describe('CentralBlockComponent', () => {
  let component: CentralBlockComponent;
  let fixture: ComponentFixture<CentralBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
