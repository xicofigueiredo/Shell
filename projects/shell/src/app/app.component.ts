import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BSimple Academy';

  isNightMode: boolean | undefined;
  constructor(private router: Router) {}
  ngOnInit() {}

  navigateToProjetos() {
    this.router.navigate(['/projeto']);
  }

  navigateToColaborators() {
    this.router.navigate(['/colaborator']);
  }

  navigateToHolidays() {
    this.router.navigate(['/Holiday']);
  }

  navigateToAssociations() {
    this.router.navigate(['/association']);
  }

  isSidebarOpen = false;

    toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
