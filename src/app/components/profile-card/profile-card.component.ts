import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ImageUrl } from '../../data/helpers/pipes/image-url.pipe';

@Component({
  selector: 'app-profile-card',
  imports: [ImageUrl],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.less'
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
