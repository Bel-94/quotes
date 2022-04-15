import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quotes';


@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote:Quote


  @Output() delete = new EventEmitter <boolean> ()

  deleteQuote(value:boolean){
    this.delete.emit(value)
  }

  like(){
    this.quote.upvotes+=1;
  }
  dislike(){
    this.quote.downvotes+=1;
  }

  timeElapsed(time:any):number{
    let currentTime:any=new Date()
    return (currentTime-time)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
