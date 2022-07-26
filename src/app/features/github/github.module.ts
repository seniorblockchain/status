import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GithubPageComponent } from './github-page/github.component';
import { GithubRoutingModule } from './github-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';


@NgModule({
  declarations: [GithubPageComponent],
  imports: [
    LottieModule.forRoot({ player: playerFactory }),
    CommonModule,
    SharedModule,
    GithubRoutingModule,
    FlexLayoutModule
  ]
})
export class GithubModule { }
export function playerFactory() {
  return player;
}
