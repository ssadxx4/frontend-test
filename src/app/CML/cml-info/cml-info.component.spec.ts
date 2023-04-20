import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmlInfoComponent } from './cml-info.component';

describe('CmlInfoComponent', () => {
  let component: CmlInfoComponent;
  let fixture: ComponentFixture<CmlInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmlInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmlInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
