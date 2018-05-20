import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ListsComponent } from './lists/lists.component';

const routes: Routes = [
  {path: '', component: ListsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
