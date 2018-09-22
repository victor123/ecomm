import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssortComponent } from './productssort.component';

describe('ProductssortComponent', () => {
  let component: ProductssortComponent;
  let fixture: ComponentFixture<ProductssortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductssortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductssortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
