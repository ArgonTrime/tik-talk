import { Component, Input } from "@angular/core";
import { Profile } from "../../data/interfaces/profile.interface";
import { ImageUrl } from "../../data/helpers/pipes/image-url.pipe";

@Component({
    selector: 'subscriber-card',
    standalone: true,
    imports: [ImageUrl],
    templateUrl: './subscriber-card.component.html',
    styleUrl: './subscriber-card.component.less'
})

export class SubscriberCardComponent {
    @Input() profile!: Profile
}