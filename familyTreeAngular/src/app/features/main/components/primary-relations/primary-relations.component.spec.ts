import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryRelationsComponent } from './primary-relations.component';

describe('PrimaryRelationsComponent', () => {
  let component: PrimaryRelationsComponent;
  let fixture: ComponentFixture<PrimaryRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryRelationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
