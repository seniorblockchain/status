/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { SetupService } from 'src/app/core/services/setup.service';

@Component({
  selector: 'app-chains-page',
  templateUrl: './chains-page.component.html',
  styleUrls: ['./chains-page.component.scss']

})
export class ChainsPageComponent implements OnInit {

  constructor(
    private api: ApiService,
    public setup: SetupService
  ) { }

  ngOnInit() {
  }

}
