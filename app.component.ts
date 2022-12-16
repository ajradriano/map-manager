import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[] = [];
  title = 'map-manager';
  display: any;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      }
    ];
  }
}
