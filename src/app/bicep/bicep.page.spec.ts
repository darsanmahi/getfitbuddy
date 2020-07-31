import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BicepPage } from './bicep.page';

describe('BicepPage', () => {
  let component: BicepPage;
  let fixture: ComponentFixture<BicepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BicepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
