import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalSalePage } from './modal-sale.page';

describe('ModalSalePage', () => {
  let component: ModalSalePage;
  let fixture: ComponentFixture<ModalSalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalSalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
