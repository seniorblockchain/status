import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SetupService } from '../setup.service';


@Injectable({
  providedIn: 'root'
})
export class ChainsLoadingResolverService  {
  constructor(
    private setup: SetupService
  ) { }
  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
      await this.setup.getChains('BLOCKCORE');
  }
}
