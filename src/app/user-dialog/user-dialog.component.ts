import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {
  dataTable : Array<any> = [
    [1,2,3,4,5,6,7,8,9],
    [10,20,30,40,50,60,70,80,90]
  ]
  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }
  getData( i : number): void {
    let elem = document.querySelectorAll('[class^="td-"]')
    elem.forEach(item => {
      if(item.className.indexOf(`td-${i}`) >= 0) {
        console.log(item.innerHTML);
        }
    });
  }
}
