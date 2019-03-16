import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConstantScorePageComponent } from './pages/constant-score-page/constant-score-page.component';
import { StrengthNormalizedConstantScorePageComponent } from './pages/strength-normalized-constant-score-page/strength-normalized-constant-score-page.component';
import { HowToMeasureShoulderStrengthPageComponent } from './pages/how-to-measure-shoulder-strength-page/how-to-measure-shoulder-strength-page.component';
import { ReferencesPageComponent } from './pages/references-page/references-page.component';
import { DisclaimerPageComponent } from './pages/disclaimer-page/disclaimer-page.component';
import { Calculator1Component } from './components/calculator1/calculator1.component';
import { Calculator2Component } from './components/calculator2/calculator2.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent },
  { path: 'calculator',  component: CalculatorPageComponent },
  { path: 'constant-score',  component: ConstantScorePageComponent },
  { path: 'strength-normalized-constant-score',  component: StrengthNormalizedConstantScorePageComponent },
  { path: 'how-to-measure-shoulder-strength',  component: HowToMeasureShoulderStrengthPageComponent },
  { path: 'references',  component: ReferencesPageComponent },
  { path: 'disclaimer',  component: DisclaimerPageComponent },
  { path: '**',  component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalculatorPageComponent,
    MenuComponent,
    ConstantScorePageComponent,
    StrengthNormalizedConstantScorePageComponent,
    HowToMeasureShoulderStrengthPageComponent,
    ReferencesPageComponent,
    DisclaimerPageComponent,
    Calculator1Component,
    Calculator2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
