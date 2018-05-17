import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsDetailsComponent } from './gs-details.component';

describe('GsDetailsComponent', () => {
  let component: GsDetailsComponent;
  let fixture: ComponentFixture<GsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
