import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component' ;
import { AboutComponent } from './about/about.component' ;
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [


  {
    path:'home',
    component: HomeComponent,
    data: {animation: 'HomePage'}
  },
  {
    path:'about',
    component: AboutComponent,
    data: {animation: 'AboutPage'}
  },
  { 
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'resume',
    component: ResumeComponent
  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }