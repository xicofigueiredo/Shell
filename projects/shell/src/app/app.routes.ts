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
    path: 'project',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('project', './projectModule').then((m) => m.ProjectMainModule),
  },
  {
    path: 'Holiday',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('Holiday', './holidayModule').then((m) => m.HolidayMainModule),
  },

];
