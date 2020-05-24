import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get(`https://enigmatic-dusk-77224.herokuapp.com/episodes`)
    }
    getEpisode(id) {
        return this.http.get(`https://enigmatic-dusk-77224.herokuapp.com/${id}`);
    }
    getCharacters() {
        return this.http.get('https://enigmatic-dusk-77224.herokuapp.com/characters')
    } 
    getCharacter(id) {
        return this.http.get(`https://enigmatic-dusk-77224.herokuapp.com/characters/${id}`);
    }
    getQuotes() {
        return this.http.get('https://enigmatic-dusk-77224.herokuapp.com/quotes/')
    }
    getQuote(id) {
        return this.http.get(`https://enigmatic-dusk-77224.herokuapp.com/quotes/${id}`);
    }
    getDeaths() {
        return this.http.get(`https://enigmatic-dusk-77224.herokuapp.com/deaths`)
    }
}
