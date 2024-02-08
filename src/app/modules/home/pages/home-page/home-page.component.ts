import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  showExtraComponents: boolean = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // La propiedad 'urlAfterRedirects' contiene la URL a la que se redirigió después de todos los redireccionamientos.
      this.showExtraComponents = event.urlAfterRedirects === '/home' || event.urlAfterRedirects === '/';
    });
  }
}
