import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { SetupService } from '../setup.service';

 
@Injectable({
  providedIn: 'root'
})
export class GithubLoadingResolverService implements Resolve<any> {
  constructor(
    private setup: SetupService
  ) { }
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
      await this.setup.getGithubData();
  }
}
