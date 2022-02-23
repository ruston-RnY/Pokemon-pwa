import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    if (!swUpdate.isEnabled) {
      console.log('service worker not enabled');
    }
  }

  promptUser() {
    let snackBar = this.snackBar.open('An update is available', 'reload', {
      duration: 10 * 1000,
    });

    snackBar.onAction().subscribe(() => {
      this.swUpdate.activateUpdate().then(() => window.location.reload());
    });
  }

  checkIsUpdate() {
    this.swUpdate.available.subscribe(() => {
      this.promptUser();
    });
  }
}
