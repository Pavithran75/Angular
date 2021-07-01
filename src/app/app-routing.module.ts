import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home-module/components/main/main.module').then(module => module.MainModule),
      },
      {
        path: 'course',
        loadChildren: () => import('./course-module/components/main/main.module').then(module => module.MainModule),
      },


    ]
  },







  // {
  //   path: '',
  //   redirectTo: '/welcome',pathMatch:'full'
  // },
  // {
  //   path: '', loadChildren: () => import('./web-layouts/main/main.module').then((m) => m.MainModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
