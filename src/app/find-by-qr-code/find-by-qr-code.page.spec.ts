import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindByQrCodePage } from './find-by-qr-code.page';

describe('FindByQrCodePage', () => {
  let component: FindByQrCodePage;
  let fixture: ComponentFixture<FindByQrCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByQrCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindByQrCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
