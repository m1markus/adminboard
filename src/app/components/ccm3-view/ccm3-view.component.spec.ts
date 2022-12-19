import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ccm3ViewComponent } from './ccm3-view.component';

describe('Ccm3ViewComponent', () => {
  let component: Ccm3ViewComponent;
  let fixture: ComponentFixture<Ccm3ViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ccm3ViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ccm3ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
