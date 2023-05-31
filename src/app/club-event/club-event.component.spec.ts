import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubEventComponent } from './club-event.component';

describe('ClubEventComponent', () => {
  let component: ClubEventComponent;
  let fixture: ComponentFixture<ClubEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClubEventComponent]
    });
    fixture = TestBed.createComponent(ClubEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
