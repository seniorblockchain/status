import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubLoadingResolverService } from 'src/app/core/services/resolver/github.loading.resolver';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { GithubPageComponent } from './github-page/github.component';
 

 

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: GithubPageComponent , resolve: {
        data: GithubLoadingResolverService
      }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubRoutingModule { }
