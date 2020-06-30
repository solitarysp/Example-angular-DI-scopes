import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenOneSubComponent } from './screen-one-sub.component';

describe('ScreenOneSubComponent', () => {
  let component: ScreenOneSubComponent;
  let fixture: ComponentFixture<ScreenOneSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenOneSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenOneSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
