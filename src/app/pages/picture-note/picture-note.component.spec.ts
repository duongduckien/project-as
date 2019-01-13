import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNoteComponent } from './picture-note.component';

describe('PictureNoteComponent', () => {
  let component: PictureNoteComponent;
  let fixture: ComponentFixture<PictureNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
