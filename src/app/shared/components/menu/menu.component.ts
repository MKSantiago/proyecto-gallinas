import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: 'home',
      },
      {
        label: 'Gallinas en venta',
        icon: 'pi pi-images',
        routerLink: 'list',
      },
      {
        label: 'Preguntas frecuentes (FAQ)',
        icon: 'pi pi-question-circle',
        // routerLink: 'list',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-id-card',
        // routerLink: 'list',
      },


    ];
  }
}
