import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsByGameComponent } from './achievements-by-game.component';

describe('AchievementsByGameComponent', () => {
  let component: AchievementsByGameComponent;
  let fixture: ComponentFixture<AchievementsByGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsByGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsByGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
