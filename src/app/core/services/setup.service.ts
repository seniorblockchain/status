import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  data: any;
  chains: any;
  indexers: any;
  Chain: any;
  Network: any;
  Indexer: any;
  initialized = false;

  private readonly currentChainSubjectBehavior = new BehaviorSubject<string>('BLOCKCORE');
  readonly currentChain$ = this.currentChainSubjectBehavior.asObservable();
  githubUser: any;
  githubURepo: any;



  get isCurrentRootChain(): boolean {
    return this.current === 'blockcore' || this.current === 'BLOCKCORE';
  }


  get current(): string {
    return this.currentChainSubjectBehavior.getValue();
  }

  set current(val: string) {
    this.currentChainSubjectBehavior.next(val);
  }

  constructor(
    private api: ApiService,
  ) {

  }
  async getIndexers() {
    const indexers = await this.api.loadIndexers();
    this.indexers = indexers;
  }


  async getChains(chain: string) {
    const data = await this.api.loadChains(chain);
    this.chains = data;
  }

  async setChain(chain: string) {
    if (this.current === chain) {
      this.current = chain;
      return;
    }
    const data = await this.api.loadSetup(chain);
    this.data = data;
    this.Chain = this.data.Chain;
    this.Network = this.data.Network;
    this.Indexer = this.data.Indexer;

    this.current = chain;
    if (this.Chain?.Color) {
      document.documentElement.style.setProperty('--accent', this.Chain?.Color);
    }
    return null;
  }

}
