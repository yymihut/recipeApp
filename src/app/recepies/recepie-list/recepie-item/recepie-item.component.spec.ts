import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemComponent } from './recepie-item.component';

describe('RecepieItemComponent', () => {
  let component: RecepieItemComponent;
  let fixture: ComponentFixture<RecepieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepieItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
