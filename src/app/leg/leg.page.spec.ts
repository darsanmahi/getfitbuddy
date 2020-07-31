import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LegPage } from './leg.page';

describe('LegPage', () => {
  let component: LegPage;
  let fixture: ComponentFixture<LegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
