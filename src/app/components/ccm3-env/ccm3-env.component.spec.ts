import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccm3EnvComponent } from './ccm3-env.component';

describe('Ccm3EnvComponent', () => {
  let component: Ccm3EnvComponent;
  let fixture: ComponentFixture<Ccm3EnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ccm3EnvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ccm3EnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
