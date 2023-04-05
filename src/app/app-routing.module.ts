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
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';

import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { Exo07dot2Component } from './exercices/exo07dot2/exo07dot2.component';
import { Exo08Component } from './exercices/exo08/exo08.component';
import { Exo09Component } from './exercices/exo09/exo09.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { Exo10Component } from './exercices/exo10/exo10.component';
import { Demo12Component } from './demos/demo12/demo12.component';

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
      { path: 'demo08', component: Demo08Component },
      { path: 'demo09', component: Demo09Component },
      { path: 'demo10', component: Demo10Component },
      { path: 'demo11', component: Demo11Component },
      { path: 'demo12', component: Demo12Component },


      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'exos', children: [
      { path: 'exo03', component: Exo03Component },
      { path: 'exo05', component: Exo05Component },
      { path: 'exo07-1', component: Exo07Component },
      { path: 'exo07-2', component: Exo07dot2Component },
      { path: 'exo08', component: Exo08Component },
      { path: 'exo09', component: Exo09Component },
      { path: 'exo10', component: Exo10Component },
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
