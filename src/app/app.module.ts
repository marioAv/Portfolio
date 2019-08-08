import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import {AnimationsLogicService} from './Services/animations-logic.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    PortfolioComponent,
    ContactComponent,
    ResumeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AnimationsLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
