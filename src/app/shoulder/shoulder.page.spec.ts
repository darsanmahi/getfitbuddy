import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShoulderPage } from './shoulder.page';

describe('ShoulderPage', () => {
  let component: ShoulderPage;
  let fixture: ComponentFixture<ShoulderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoulderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoulderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
