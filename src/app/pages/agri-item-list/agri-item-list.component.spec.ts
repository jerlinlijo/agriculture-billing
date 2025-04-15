import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriItemListComponent } from './agri-item-list.component';

describe('AgriItemListComponent', () => {
  let component: AgriItemListComponent;
  let fixture: ComponentFixture<AgriItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
