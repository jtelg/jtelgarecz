import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from './head.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [HeadComponent],
  declarations: [HeadComponent],
})
export class HeadComponentModule {}
