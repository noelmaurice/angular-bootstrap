import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { BannerComponent } from './component/banner/banner.component';
import { CopyrightComponent } from './component/copyright/copyright.component';
import { FooterComponent } from './component/footer/footer.component';
import { ViewModule } from './view/view.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';


@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		BannerComponent,
		CopyrightComponent,
		FooterComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule,
		ViewModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
