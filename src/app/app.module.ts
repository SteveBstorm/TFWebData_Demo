import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { FormsModule } from '@angular/forms';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';
import { GetByIdPipe } from './demos/demo07/pipes/get-by-id.pipe';
import { SommePipe } from './demos/demo07/pipes/somme.pipe';
import { SumArrayPipe } from './demos/demo07/pipes/sum-array.pipe';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { Exo07dot2Component } from './exercices/exo07dot2/exo07dot2.component';
import { ChronoPipe } from './exercices/exo07/chrono.pipe';
import { ToFahrenheitPipe } from './exercices/exo07dot2/to-fahrenheit.pipe';
import { ToCelsiusPipe } from './exercices/exo07dot2/to-celsius.pipe';
import { TemperaturePipe } from './exercices/exo07dot2/temperature.pipe';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Exo08Component } from './exercices/exo08/exo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Exo09Component } from './exercices/exo09/exo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { HighlightDirective } from './demos/demo10/directives/highlight.directive';
import { TraductionDirective } from './demos/demo10/directives/traduction.directive';
import { Demo11Component } from './demos/demo11/demo11.component';
import { EnfantComponent } from './demos/demo11/enfant/enfant.component';
import { ReponseComponent } from './demos/demo11/reponse/reponse.component';
import { Exo10Component } from './exercices/exo10/exo10.component';
import { MoviesListComponent } from './exercices/exo10/components/movies-list/movies-list.component';
import { MoviesListItemComponent } from './exercices/exo10/components/movies-list-item/movies-list-item.component';
import { MovieDetailsComponent } from './exercices/exo10/components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Exo03Component,
    Demo04Component,
    Demo05Component,
    NavbarComponent,
    FourofourComponent,
    Exo05Component,
    Demo06Component,
    Demo07Component,
    FormatDatePipe,
    GetByIdPipe,
    SommePipe,
    SumArrayPipe,
    Exo07Component,
    Exo07dot2Component,
    ChronoPipe,
    ToFahrenheitPipe,
    ToCelsiusPipe,
    TemperaturePipe,
    Demo08Component,
    Exo08Component,
    Demo09Component,
    Exo09Component,
    Demo10Component,
    HighlightDirective,
    TraductionDirective,
    Demo11Component,
    EnfantComponent,
    ReponseComponent,
    Exo10Component,
    MoviesListComponent,
    MoviesListItemComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
