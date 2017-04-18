import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XlangModule } from '../xlang';

import { AUTH_HTTP } from '../common';
import { SVG4E_DEP, Svg4eModule } from '../svg4e';

import { PAY_HTTP } from './models/token';
import { PayConfig } from './models';
import { WxService, PayService } from './services';
import { PayMobileComponent } from './mobile/pay-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    XlangModule,
    Svg4eModule,
  ],
  declarations: [PayMobileComponent],
  exports: [
    XlangModule,
    Svg4eModule,
    PayMobileComponent,
  ]
})
export class PayModule {

  static forRoot(config: PayConfig, useExistingHttp: any = AUTH_HTTP): ModuleWithProviders {
    return {
      ngModule: PayModule,
      providers: [
        WxService,
        PayService,
        { provide: PayConfig, useValue: config },
        { provide: PAY_HTTP, useExisting: useExistingHttp },
        { provide: SVG4E_DEP, useValue: 'ef-pay', multi: true },
      ]
    };
  }

}
