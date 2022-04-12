export class Quotes {
    id: number;
    name: string;
    publisher: string;
    quote: string;
    date: number;
    upvotes: number;
    downvotes: number;

    constructor (id:number, name: string, publisher: string, quote: string, date: number, upvotes: number, downvotes: number) {
        this.id = id;
        this.name = name;
        this.publisher = publisher;
        this.quote = quote;
        this.date = date;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
