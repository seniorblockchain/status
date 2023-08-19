import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ContentPlaceholderAnimationComponent } from './content-placeholder-animation/content-placeholder-animation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    ConfirmDialogComponent,
    ContentPlaceholderAnimationComponent,
    LimitToPipe,
    LocalDatePipe,
    YesNoPipe,
    LayoutComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    LimitToPipe,
    ConfirmDialogComponent,
    ContentPlaceholderAnimationComponent,
    LocalDatePipe,
    YesNoPipe
  ] 
})
export class SharedModule { }
