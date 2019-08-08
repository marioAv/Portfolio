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
      github: true,
      githubLink: "https://github.com/marioAv/Portfolio",
      wordpress:false
    },

    { 
      name:'TTHA', 
      image:'https://ttha.com/wp-content/uploads/2017/05/ttha-logo-e1494012336295.png',
      url:"https://www.ttha.com/",
      github:false,
      githubLink: "https://github.com/marioAv/Portfolio",
      wordpress:true
    },

    { 
      name:'Clean Pacs', 
      image:'https://cdn.shopify.com/s/files/1/0073/1863/4594/files/CleanPacs-Eco-Cleaning-Logo_300x300.png?v=1541525360',
      url:"https://www.cleanpacs.com/",
      github:false,
      githubLink: "https://github.com/marioAv/Portfolio",
      wordpress:true
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
