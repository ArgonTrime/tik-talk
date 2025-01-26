import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Profile } from "../interfaces/profile.interface";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    http = inject(HttpClient)
    baseURL = 'https://icherniakov.ru/yt-course/'
    constructor(){}

    getTestProfiles(){
        return this.http.get<Profile[]>(`${this.baseURL}account/test_accounts`)
    }
}