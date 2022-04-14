import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  @Output() addQuote=new EventEmitter<Quote>();
  

  submitQuote(a:string, b:string, c:string){
    let newQuote=new Quote(a, b, c);
    this.addQuote.emit(newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
