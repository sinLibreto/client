import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {


  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Opcional: Cerrar el dropdown al hacer clic fuera
  onClickOutside(event: Event) {
    // Implementación para cerrar el dropdown
  }
}
