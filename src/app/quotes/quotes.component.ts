import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote [] = [
    new Quote ("Fred Swaniker", "Belinda", "Do the Hard Things"),
    new Quote ("Belinda", "Malomba", "Quiting is never an option, focus on the prize"),
    new Quote ("Nelson Mandela", "Moses Ochieng", "It always seems impossible until its done"),
    new Quote ("Oscar Wilde", "Shana", "Be yourself; everyone else is already taken"),
    new Quote ("Dr.Jeremy Goldwig", "Reagan", "Live a life that would make you jelous"),
  ]


  showDetails(index: number){
   if (this.quotes[index].details === true) {
      this.quotes[index].details = false
     this.quotes[index].toggleText = "Show Details"
   }
   else {
    this.quotes[index].details = true
     this.quotes[index].toggleText = "Hide Details"
   }
  }

  delete(value:boolean, index:number){
    if (value===true){
      this.quotes.splice(index,1)
    }
  }

  addQuote(value:Quote) {
    this.quotes.push(value)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
