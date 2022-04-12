import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote [] = [
    new Quote (1, "Fred Swaniker", "Belinda", "Do the Hard Things", new Date (2022/4/8), 0, 0,),
    new Quote (2, "Belinda", "Malomba", "Quiting is never an option, focus on the prize",new Date (2022/3/15),0,0 ),
    new Quote (3, "Nelson Mandela", "Moses Ochieng", "It always seems impossible until its done", new Date (2022/4/6), 0, 0),
    new Quote (4, "Oscar Wilde", "Shana", "Be yourself; everyone else is already taken", new Date (2022/3/20), 0, 0),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
