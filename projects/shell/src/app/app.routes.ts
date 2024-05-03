import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'remote',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('remote', './routes').then((m) => m.APP_ROUTES),
  },
  {
    path: 'Holiday',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('Holiday', './holidayModule').then((m) => m.HolidayMainModule),
  },

];
