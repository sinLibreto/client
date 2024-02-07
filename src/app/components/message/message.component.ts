import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Opcional: Cerrar el dropdown al hacer clic fuera
  onClickOutside(event: Event) {
    // Implementación para cerrar el dropdown
  }
}

