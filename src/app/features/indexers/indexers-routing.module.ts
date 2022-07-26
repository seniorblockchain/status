import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexersLoadingResolverService } from 'src/app/core/services/resolver/indexers.loading.resolver';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { IndexersPageComponent } from './indexers-page/indexers.component';
 

 

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: IndexersPageComponent , resolve: {
        data: IndexersLoadingResolverService
      }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexersRoutingModule { }
