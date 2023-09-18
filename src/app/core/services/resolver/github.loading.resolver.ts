import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { SetupService } from '../setup.service';

@Injectable({
  providedIn: 'root'
})
export class GithubLoadingResolverService  {
  constructor(
    private setup: SetupService
  ) { }
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

  }
}
