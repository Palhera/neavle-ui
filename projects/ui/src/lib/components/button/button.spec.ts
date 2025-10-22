import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvlButton } from './button';

describe('NvlButton', () => {
  let component: NvlButton;
  let fixture: ComponentFixture<NvlButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvlButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvlButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
