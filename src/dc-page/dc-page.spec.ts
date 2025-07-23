import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPage } from './dc-page';

describe('DcPage', () => {
  let component: DcPage;
  let fixture: ComponentFixture<DcPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DcPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
