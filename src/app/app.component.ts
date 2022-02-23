import { Component } from '@angular/core';
import { UpdateService } from './shared/service/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokedex';

  offline: boolean = true;

  constructor(private updateService: UpdateService) {
    updateService.checkIsUpdate();
  }

  onNetworkStatusChange() {
    // untuk mengecek apakah aplikasi online atau tidal
    this.offline = !navigator.onLine;
  }

  ngOnInit(): void {
    this.onNetworkStatusChange();
    window.addEventListener('online', this.onNetworkStatusChange.bind(this));
    window.addEventListener('offline', this.onNetworkStatusChange.bind(this));
  }
}
