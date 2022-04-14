export class Quote {

    name: string;
    publisher: string;
    quote: string;
    date: Date;
    upvotes: number;
    downvotes: number;
    details: boolean;
    toggleText: string;

    constructor (name: string, publisher: string, quote: string) {
        this.name = name;
        this.publisher = publisher;
        this.quote = quote;
        this.date = new Date();
        this.upvotes = 0;
        this.downvotes = 0;
        this.details = false;
        this.toggleText = "Show Details"
    }
}
