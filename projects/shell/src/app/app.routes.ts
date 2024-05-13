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
    path: 'Holiday',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('Holiday', './holidayModule').then((m) => m.HolidayMainModule),
  },

  {
    path: 'colaborator',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('colaborator', './colaboratorModule').then((m) => m.ColaboratorMainModule),
  },
  {
    path: 'association',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('association', './associationModule').then((m) => m.AssociationMainModule),
  },
  {
    path: 'projeto',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('projeto', './Component').then((m) => m.ProjetoMainModule),
  },
  {
    path: 'training',
    // loadChildreas instead of loadComponent !!!
    loadChildren: () =>
      loadRemoteModule('training', './trainingModule').then((m) => m.TrainingMainModule),
  },

];
