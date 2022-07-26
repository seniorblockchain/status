import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChainsLoadingResolverService } from 'src/app/core/services/resolver/chains.loading.resolver';

import { LayoutComponent } from '../../shared/layout/layout.component';
import { ChainsPageComponent } from './chains-page/chains-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ChainsPageComponent , resolve: {
        data: ChainsLoadingResolverService
      }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChainsRoutingModule { }
