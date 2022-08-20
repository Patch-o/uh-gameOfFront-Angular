import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryChronologyComponent } from './gallery-chronology.component';

describe('GalleryChronologyComponent', () => {
  let component: GalleryChronologyComponent;
  let fixture: ComponentFixture<GalleryChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryChronologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryChronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
