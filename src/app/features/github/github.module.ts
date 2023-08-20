import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GithubPageComponent } from './github-page/github.component';
import { GithubRoutingModule } from './github-routing.module';
import { LottieModule } from 'ngx-lottie';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GithubPageComponent],
  imports: [
     CommonModule,
    SharedModule,
    GithubRoutingModule,
    FlexLayoutModule
  ]
})
export class GithubModule { }
 
