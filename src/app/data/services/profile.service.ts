import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Profile } from "../interfaces/profile.interface";
import { Pageble } from "../interfaces/pageble.interface";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    http = inject(HttpClient)
    baseURL = 'https://icherniakov.ru/yt-course/'

    getTestProfiles(){
        return this.http.get<Profile[]>(`${this.baseURL}account/test_accounts`)
    }

    getMe() {
        this.http.get<Profile>(`${this.baseURL}account/me`)
    }

    getSubscribersShortList() {
        return this.http.get<Pageble<Profile>>(`${this.baseURL}account/subscribers`)
        .pipe(
            map(res => res.items.slice(0, 3))
        )
    }
}