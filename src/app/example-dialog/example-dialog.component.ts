import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { User } from '../interfaces/user';

@Component({
  selector: 'example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent {
  user = { name: '', city: '' };
  dialogRef: any;

  constructor(public dialog: MatDialog) { }

  // Opening Dialog created by Component
  openUserDialog() {
    this.dialogRef = this.dialog.open(UserDialogComponent, 
      { data: this.user, autoFocus: true });

    this.dialogRef.afterClosed().subscribe((result: User) => {
      console.log('The User dialog was closed.');
      console.log(result?.name + ' - ' + result?.city);
    });
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