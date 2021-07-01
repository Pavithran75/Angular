import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent, CourseListingComponent } from '..';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path:'',component: MainComponent,children: [
    {path:'course-listing',component: CourseListingComponent},
    {path:'course-details/:course_name',component: CourseDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
