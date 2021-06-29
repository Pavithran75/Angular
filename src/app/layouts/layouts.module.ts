import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
@NgModule({
  declarations: [LayoutsComponent, BasicLayoutComponent,NavHeaderComponent,NavFooterComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
