import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/core/services/setup.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-github',
  templateUrl: 'github.component.html',
  styleUrls: ['github.component.scss']

})
export class GithubPageComponent implements OnInit {

  constructor(
    public setup: SetupService
  ) {

  }


  options: AnimationOptions = {
    path: '/assets/animations/github.json',
  };

  animationCreated(animationItem: AnimationItem): void {
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
