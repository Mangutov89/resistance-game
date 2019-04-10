import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomGeneratorComponent } from './room-generator.component';

describe('RoomGeneratorComponent', () => {
  let component: RoomGeneratorComponent;
  let fixture: ComponentFixture<RoomGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
