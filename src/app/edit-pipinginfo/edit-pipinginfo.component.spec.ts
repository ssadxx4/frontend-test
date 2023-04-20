import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPipinginfoComponent } from './edit-pipinginfo.component';

describe('EditPipinginfoComponent', () => {
  let component: EditPipinginfoComponent;
  let fixture: ComponentFixture<EditPipinginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPipinginfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPipinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
