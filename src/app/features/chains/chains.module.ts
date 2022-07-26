import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChainsRoutingModule } from './chains-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChainsPageComponent } from './chains-page/chains-page.component';

@NgModule({
  declarations: [ChainsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChainsRoutingModule
  ]
})
export class ChainsModule { }
