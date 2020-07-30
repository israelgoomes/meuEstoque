import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalEditProviderPage } from './modal-edit-provider.page';

describe('ModalEditProviderPage', () => {
  let component: ModalEditProviderPage;
  let fixture: ComponentFixture<ModalEditProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEditProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
