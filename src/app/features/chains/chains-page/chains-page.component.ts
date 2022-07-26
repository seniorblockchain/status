/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/api.service';
import { SetupService } from 'src/app/core/services/setup.service';
import { NetworkDialogComponent } from './network-dialog.component';
 
@Component({
  selector: 'app-chains-page',
  templateUrl: './chains-page.component.html',
  styleUrls: ['./chains-page.component.scss']

})
export class ChainsPageComponent implements OnInit {
  chaininfo: any;
  symbol!: string;
  progress!: string;
  syncBlockIndex!: string;
  constructor(
    private api: ApiService,
    public setup: SetupService,
   public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  async openDialog(symbol:string):Promise<void>{
    this.chaininfo = await this.api.download('https://'+symbol+'.indexer.blockcore.net/api/stats');
 
      const dialogRef = this.dialog.open(NetworkDialogComponent, {
        width: '250px',
        data: {progress: this.chaininfo.progress , symbol :  this.chaininfo.symbol},
      });
  }
}