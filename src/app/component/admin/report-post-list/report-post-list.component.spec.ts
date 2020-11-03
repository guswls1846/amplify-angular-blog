import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPostListComponent } from './report-post-list.component';

describe('ReportPostListComponent', () => {
  let component: ReportPostListComponent;
  let fixture: ComponentFixture<ReportPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
