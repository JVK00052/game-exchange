import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData { }

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(CartDialog, {
      disableClose: true,
      panelClass: 'full-dialog'
    });
  }
}

@Component({
  selector: 'cart.dialog',
  templateUrl: './cart.dialog.html',
  styleUrls: ['./cart.component.css']
})

export class CartDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
