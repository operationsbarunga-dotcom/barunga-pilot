import { Component } from '@angular/core';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-teamsection',
  imports: [],
  templateUrl: './teamsection.html',
  styleUrl: './teamsection.css',
})


export class Teamsection {

  teamData = [
    {
      id: "1",
      name: "Jeremy Walker",
      img: "images/team1.png",
      position: "CEO, Founder, Atty.",
      description: "Porem ipsum dolor sit amet, cou dol consectetur adipiscing elit. Etiam eu turpis molestie."
    },
      {
      id: "2",
      name: "Kathryn Ryan",
      img: "images/team2.png",
      position: "CEO, Founder, Atty.",
      description: "Porem ipsum dolor sit amet, cou dol consectetur adipiscing elit. Etiam eu turpis molestie."
    },
      {
      id: "3",
      name: "Lawson Arnold",
      img: "images/team3.png",
      position: "CEO, Founder, Atty.",
      description: "Porem ipsum dolor sit amet, cou dol consectetur adipiscing elit. Etiam eu turpis molestie."
    },
      {
      id: "4",
      name: "Patrik White",
      img: "images/team4.png",
      position: "CEO, Founder, Atty.",
      description: "Porem ipsum dolor sit amet, cou dol consectetur adipiscing elit. Etiam eu turpis molestie."
    },

  ];

}


