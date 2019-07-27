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
    data: {animation: 'home'}
  },
  {
    path:'about',
    component: AboutComponent,
    data: {animation: 'about'}
  },
  { 
    path:'portfolio',
    component: PortfolioComponent,
    data: {animation: 'portfolio'}
  },
  {
    path:'contact',
    component: ContactComponent,
    data: {animation: 'contact'}
  },
  {
    path:'resume',
    component: ResumeComponent,
    data: {animation: 'resume'}


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


