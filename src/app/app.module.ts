import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { BannerComponent } from './component/banner/banner.component';
import { CopyrightComponent } from './component/copyright/copyright.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { ViewModule } from './view/view.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    CopyrightComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
