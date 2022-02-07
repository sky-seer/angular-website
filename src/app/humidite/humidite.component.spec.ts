import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumiditeComponent } from './humidite.component';

describe('HumiditeComponent', () => {
  let component: HumiditeComponent;
  let fixture: ComponentFixture<HumiditeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumiditeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumiditeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
