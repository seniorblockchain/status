import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)

  },
  {
    path: 'github',
    loadChildren: () => import('./features/github/github.module').then(m => m.GithubModule)
  },
  {
    path: 'chains',
    loadChildren: () => import('./features/chains/chains.module').then(m => m.ChainsModule)
  },
  {
    path: 'indexers',
    loadChildren: () => import('./features/indexers/indexers.module').then(m => m.IndexersbModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes ,{ enableTracing: false, useHash: true })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
