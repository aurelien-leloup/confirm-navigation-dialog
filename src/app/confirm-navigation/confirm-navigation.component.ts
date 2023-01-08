import { HostListener } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

export abstract class ConfirmNavigationComponent {

  dialogConfirmed = false;

  protected constructor(protected dialog: MatDialog, protected router: Router) {
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.hasUnsavedData()) {
      $event.returnValue = true;
    }
  }

  abstract hasUnsavedData(): boolean;

  displayConfirmDialog() {
    const matDialog = this.dialog.open(ConfirmDialogComponent);
    matDialog.afterClosed().subscribe(result => {
      if (result) {
        this.dialogConfirmed = true;
        this.router.navigate(['']);
      }
    });
  }

}
