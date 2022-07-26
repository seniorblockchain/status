import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GithubPageComponent } from './github-page/github.component';
import { GithubRoutingModule } from './github-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';



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
