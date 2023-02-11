import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHelperComponent } from './progress-helper.component';

describe('ProgressHelperComponent', () => {
  let component: ProgressHelperComponent;
  let fixture: ComponentFixture<ProgressHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressHelperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
