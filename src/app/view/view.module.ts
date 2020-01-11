import { NgModule } from '@angular/core';

import { PortfolioComponent } from '../component/portfolio/portfolio.component';
import { AboutComponent } from '../component/about/about.component';
import { ContactComponent } from '../component/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view-routing.module';



@NgModule({
	declarations: [
		PortfolioComponent,
		AboutComponent,
		ContactComponent,
		HomeComponent
	],
	imports: [
		ViewRoutingModule
	]
})
export class ViewModule { }
