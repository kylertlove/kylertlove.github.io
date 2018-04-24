import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaHomeComponent } from './nasa-home.component';

describe('NasaHomeComponent', () => {
  let component: NasaHomeComponent;
  let fixture: ComponentFixture<NasaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
