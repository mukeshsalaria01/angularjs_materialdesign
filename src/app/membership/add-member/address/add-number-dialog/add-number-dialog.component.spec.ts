import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumberDialogComponent } from './add-number-dialog.component';

describe('AddNumberDialogComponent', () => {
  let component: AddNumberDialogComponent;
  let fixture: ComponentFixture<AddNumberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNumberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
