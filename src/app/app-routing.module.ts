import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then((m) => m.IndexPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'workout',
    loadChildren: () =>
      import('./workout/workout.module').then((m) => m.WorkoutPageModule),
  },
  {
    path: 'index',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'chest',
    loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
  },
  {
    path: 'back',
    loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
  },
  {
    path: 'bicep',
    loadChildren: () => import('./bicep/bicep.module').then( m => m.BicepPageModule)
  },
  {
    path: 'tricep',
    loadChildren: () => import('./tricep/tricep.module').then( m => m.TricepPageModule)
  },
  {
    path: 'shoulder',
    loadChildren: () => import('./shoulder/shoulder.module').then( m => m.ShoulderPageModule)
  },
  {
    path: 'leg',
    loadChildren: () => import('./leg/leg.module').then( m => m.LegPageModule)
  },
  {
    path: 'addworkout',
    loadChildren: () => import('./addworkout/addworkout.module').then( m => m.AddworkoutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
