import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { ApiService } from 'src/app/core/services/api.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SetupService } from 'src/app/core/services/setup.service';

@Component({
  selector: 'app-github',
  templateUrl: 'github.component.html',
  styleUrls: ['github.component.scss']

})
export class GithubPageComponent implements OnInit {
  user: any;
  userRepos: any;
  constructor(
    public api: ApiService,
    private profileService: ProfileService
  ) {
   }


  async findUser () {
    this.profileService.UpdateUser("block-core");

  this.user = await this.profileService.getUser();

  this.userRepos = await this.profileService.getUserRepos();
  
  }

  ngOnInit() {
    this.findUser()
  }

}
