import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileyRowComponent } from './smiley-row.component';

describe('SmileyRowComponent', () => {
  let component: SmileyRowComponent;
  let fixture: ComponentFixture<SmileyRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmileyRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmileyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
