import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsstesDataComponent } from './asstes-data.component';

describe('AsstesDataComponent', () => {
  let component: AsstesDataComponent;
  let fixture: ComponentFixture<AsstesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsstesDataComponent]
    });
    fixture = TestBed.createComponent(AsstesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
