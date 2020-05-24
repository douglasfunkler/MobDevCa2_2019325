import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/episodes')
    }

    getEpisode(id) {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/episodes/${id}');
    }

    getCharacters() {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/characters')
    }

    getCharacter(id) {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/characters/${id}');
    }
    getQuotes() {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/quotes')
    }

    getQuote(id) {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/quotes/${id}');
    }

    getDeaths() {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/deaths')
    }

    getDeath(id) {
        return this.http.get('https://calm-anchorage-69948.herokuapp.com/deaths/${id}')
    }
}
