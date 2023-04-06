import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {
  dialogRef: any;

  constructor(public dialog: MatDialog) { }

  // Opening Dialog created by Component
  openUserDialog() {
    this.dialogRef = this.dialog.open(UserDialogComponent, 
      { autoFocus: true });
  }
  
  // Opening Dialog created by ng-template
  @ViewChild('myInfoDialog') infoDialog = {} as TemplateRef<string>;  
  myInfo = "Namaste to the world!";
  openInfoDialog() {
    this.dialogRef = this.dialog.open(this.infoDialog, { data: this.myInfo });

    this.dialogRef.afterClosed().subscribe(() => {
      console.log('The Info dialog was closed.');
    });
  }  
} 