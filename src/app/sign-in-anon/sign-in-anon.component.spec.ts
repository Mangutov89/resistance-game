import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAnonComponent } from './sign-in-anon.component';

describe('SignInAnonComponent', () => {
  let component: SignInAnonComponent;
  let fixture: ComponentFixture<SignInAnonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInAnonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInAnonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
