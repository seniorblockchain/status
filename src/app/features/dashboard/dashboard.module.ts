import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import player from 'lottie-web';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
export function playerFactory() {
  return player;
}
