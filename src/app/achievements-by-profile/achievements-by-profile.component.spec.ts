import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsByProfileComponent } from './achievements-by-profile.component';

describe('AchievementsByProfileComponent', () => {
  let component: AchievementsByProfileComponent;
  let fixture: ComponentFixture<AchievementsByProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsByProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsByProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
