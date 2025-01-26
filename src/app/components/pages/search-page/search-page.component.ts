import { Component, inject } from "@angular/core";
import { ProfileService } from "../../../data/services/profile.service";
import { Profile } from "../../../data/interfaces/profile.interface";
import { ProfileCardComponent } from "../../profile-card/profile-card.component";

@Component({
    selector: 'search-page',
    standalone: true,
    imports: [ProfileCardComponent],
    templateUrl: './search-page.component.html',
    styleUrl: './search-page.component.less'
})

export class SearchPageComponent {
    profileService = inject(ProfileService)
    profiles: Profile[] = []

  constructor(){
    this.profileService.getTestProfiles().subscribe(value => {
      this.profiles = value
    })
  }
}