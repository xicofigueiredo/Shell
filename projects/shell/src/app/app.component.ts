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


  isNightMode: boolean | undefined;
  constructor(private router: Router) {}
  ngOnInit() {}

  navigateToProjetos() {
    this.router.navigate(['/remote']);
  }

  navigateToColaborators() {
    this.router.navigate(['/Mudar']);
  }

  navigateToHolidays() {
    this.router.navigate(['/Mudar']);
  }





  title = 'Projeto/Frontend';
}
