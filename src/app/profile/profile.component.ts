import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData { }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(AccountDialog, {
      disableClose: true,
      panelClass: 'full-dialog' });
    }
  }

  @Component({
    selector: 'account.dialog',
    templateUrl: './account.dialog.html',
    styleUrls: ['./profile.component.css']
  })

  export class AccountDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    
}

