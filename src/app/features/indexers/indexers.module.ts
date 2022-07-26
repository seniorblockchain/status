import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import { SharedModule } from '../../shared/shared.module';
import { IndexersPageComponent } from './indexers-page/indexers.component';
import { IndexersRoutingModule } from './indexers-routing.module';
 
  
@NgModule({
  declarations: [IndexersPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndexersRoutingModule
  ]
})
export class IndexersbModule { }
