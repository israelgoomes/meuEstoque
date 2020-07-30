import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditProductPage } from './modal-edit-product.page';

describe('ModalEditProductPage', () => {
  let component: ModalEditProductPage;
  let fixture: ComponentFixture<ModalEditProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
