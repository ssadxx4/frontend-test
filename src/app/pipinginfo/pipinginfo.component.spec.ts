import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipinginfoComponent } from './pipinginfo.component';

describe('PipinginfoComponent', () => {
  let component: PipinginfoComponent;
  let fixture: ComponentFixture<PipinginfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipinginfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
