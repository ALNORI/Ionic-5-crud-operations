import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PadsPage } from './pads.page';

describe('PadsPage', () => {
  let component: PadsPage;
  let fixture: ComponentFixture<PadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
