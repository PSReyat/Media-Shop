import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCheckoutListComponent } from './item-checkout-list.component';

describe('ItemCheckoutListComponent', () => {
  let component: ItemCheckoutListComponent;
  let fixture: ComponentFixture<ItemCheckoutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCheckoutListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCheckoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
