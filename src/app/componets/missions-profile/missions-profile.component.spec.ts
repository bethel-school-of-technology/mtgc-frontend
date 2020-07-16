import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsProfileComponent } from './missions-profile.component';

describe('MissionsProfileComponent', () => {
  let component: MissionsProfileComponent;
  let fixture: ComponentFixture<MissionsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
