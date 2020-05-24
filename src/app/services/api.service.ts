import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    // getEpisodes() {
    //     return this.http.get(`http://www.breakingbadapi.com/api/episodes`)
    // }
    getEpisodes() {
        return this.http.get(`https://fast-lake-65213.herokuapp.com/episodes`)
    }
    getEpisode(id) {
        return this.http.get(`http://www.breakingbadapi.com/api/episodes/${id}`);
    }
    getCharacters() {
        return this.http.get('http://www.breakingbadapi.com/api/characters')
    } 
    getCharacter(id) {
        return this.http.get(`http://www.breakingbadapi.com/api/characters/${id}`);
    }
    getQuotes() {
        return this.http.get('http://www.breakingbadapi.com/api/quotes/')
    }
    getQuote(id) {
        return this.http.get(`http://www.breakingbadapi.com/api/quotes/${id}`);
    }
    getDeaths() {
        return this.http.get(`http://www.breakingbadapi.com/api/deaths`)
    }
}
