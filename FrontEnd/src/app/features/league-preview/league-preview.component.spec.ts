import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguePreviewComponent } from './league-preview.component';

describe('LeaguePreviewComponent', () => {
  let component: LeaguePreviewComponent;
  let fixture: ComponentFixture<LeaguePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
