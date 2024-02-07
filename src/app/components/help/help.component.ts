import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Opcional: Cerrar el dropdown al hacer clic fuera
  onClickOutside(event: Event) {
    // Implementación para cerrar el dropdown
  }

}
