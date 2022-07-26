import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    DashboardRoutingModule,
    SharedModule
  ],
  entryComponents: []
})
export class DashboardModule { }
export function playerFactory() {
  return player;
}
