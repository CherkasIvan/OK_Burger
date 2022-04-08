import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimeBlockComponent } from './work-time-block.component';

describe('WorkTimeBlockComponent', () => {
  let component: WorkTimeBlockComponent;
  let fixture: ComponentFixture<WorkTimeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTimeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
