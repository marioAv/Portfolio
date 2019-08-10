import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects= [
    { 
      name:'Cate McNabb', 
      image:'https://images.catemcnabbcosmetics.com/Images/Cate+Cart/CMClogo.png',
      url:"https://www1.catemcnabbcosmetics.com/home",
    },

    { 
      name:'Fagalde Interior Design', 
      image:'http://www.fagaldedesign.com/images/fagalde-design-logo.png',
      url:"http://www.fagaldedesign.com/",
    },

    { 
      name:'Clean Pacs', 
      image:'https://cdn.shopify.com/s/files/1/0073/1863/4594/files/CleanPacs-Eco-Cleaning-Logo_300x300.png?v=1541525360',
      url:"https://www.cleanpacs.com/",
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
