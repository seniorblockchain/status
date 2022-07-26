import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/core/services/setup.service';
 

@Component({
  selector: 'app-github',
  templateUrl: 'github.component.html',
  styleUrls: ['github.component.scss']

})
export class GithubPageComponent implements OnInit {

  constructor(
     public setup: SetupService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
