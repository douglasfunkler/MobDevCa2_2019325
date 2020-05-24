import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

 quotes: Observable<any>;

    constructor(private router: Router, private http: HttpClient) { }
    
    ngOnInit() {
        this.quotes = this.http.get('https://breakingbadapi.com/api/quotes');
        this.quotes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }
}
