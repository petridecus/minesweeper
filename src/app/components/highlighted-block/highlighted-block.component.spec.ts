import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedBlockComponent } from './highlighted-block.component';

describe('HighlightedBlockComponent', () => {
  let component: HighlightedBlockComponent;
  let fixture: ComponentFixture<HighlightedBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightedBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
