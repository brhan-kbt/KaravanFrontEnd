import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardlistComponent } from './rewardlist.component';

describe('RewardlistComponent', () => {
  let component: RewardlistComponent;
  let fixture: ComponentFixture<RewardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
