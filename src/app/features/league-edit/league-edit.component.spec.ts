import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueEditComponent } from './league-edit.component';

describe('LeagueEditComponent', () => {
  let component: LeagueEditComponent;
  let fixture: ComponentFixture<LeagueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
