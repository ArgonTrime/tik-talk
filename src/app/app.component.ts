import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor(){
    this.profileService.getTestProfiles().subscribe(value => {
      this.profiles = value
    })
  }
}
