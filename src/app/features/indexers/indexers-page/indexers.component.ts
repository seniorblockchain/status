import { Component, OnInit } from '@angular/core';
import { WebProvider } from "@blockcore/provider";
import { BlockcoreDns } from '@blockcore/dns';
import { ApiService } from 'src/app/core/services/api.service';
import { SetupService } from 'src/app/core/services/setup.service';
 

@Component({
  selector: 'app-indexers',
  templateUrl: 'indexers.component.html',
  styleUrls: ['indexers.component.scss']
})
export class IndexersPageComponent implements OnInit {

  constructor(private api: ApiService, public setup: SetupService) {
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  async ngOnInit() {
  }

}

