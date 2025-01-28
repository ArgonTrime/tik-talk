import { Component, inject } from "@angular/core";
import { SubscriberCardComponent } from "../subscriber-card/subscriber-card.component";
import { RouterLink } from "@angular/router";
import { ProfileService } from "../../data/services/profile.service";
import { AsyncPipe } from "@angular/common";

@Component({
    selector: 'sidebar',
    standalone: true,
    imports: [RouterLink, AsyncPipe, SubscriberCardComponent],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.less'
})

export class SidebarComponent {
    profileService  = inject(ProfileService)
    subscribes$ = this.profileService.getSubscribersShortList()
    menuItems = [
        {
            label: 'Моя страница',
            icon_name: 'home-icon',
            link: ''
        },
        {
            label: 'Чаты',
            icon_name: 'chat-icon',
            link: 'chats'
        },
        {
            label: 'Поиск',
            icon_name: 'search-icon',
            link: 'search'
        }
    ]
}