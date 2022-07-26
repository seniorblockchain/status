/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'network-modal',
  templateUrl: './network-dialog.component.html',
})
export class NetworkDialogComponent implements OnInit {
  chaininfo: any;

  constructor(
    public dialogRef: MatDialogRef<NetworkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  symbol:string;
  progress: string;
  syncBlockIndex: string;
}


