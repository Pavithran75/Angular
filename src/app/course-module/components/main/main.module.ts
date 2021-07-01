import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CourseListingComponent,CourseDetailsComponent } from '..';

const pageComponents = [CourseListingComponent,CourseDetailsComponent];

@NgModule({
  declarations: [MainComponent,...pageComponents],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule {
}
