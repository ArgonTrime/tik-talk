import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProfileService } from "../../data/services/profile.service";

@Component({
    selector: 'layout',
    standalone: true,
    imports: [RouterOutlet, SidebarComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.less'
})

export class LayoutComponent {
    profileService = inject(ProfileService)
}