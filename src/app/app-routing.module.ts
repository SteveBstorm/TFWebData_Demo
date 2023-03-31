import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';

import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';

import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo05Component } from './exercices/exo05/exo05.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'demos', children: [
      { path: 'demo01', component: Demo01Component },
      { path: 'demo02', component: Demo02Component },
      { path: 'demo03', component: Demo03Component },
      { path: 'demo04', component: Demo04Component },
      { path: 'demo05', component: Demo05Component },
      { path: 'demo06', component: Demo06Component },
      { path: 'demo07', component: Demo07Component },


      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'exos', children: [
      { path: 'exo03', component: Exo03Component },
      { path: 'exo05', component: Exo05Component },
    ]
  },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: FourofourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
