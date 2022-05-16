import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pratod',
    loadChildren: () => import('./categs/pratod/pratod.module').then( m => m.PratodPageModule)
  },
  {
    path: 'refeicao',
    loadChildren: () => import('./categs/refeicao/refeicao.module').then( m => m.RefeicaoPageModule)
  },
  {
    path: 'lanches',
    loadChildren: () => import('./categs/lanches/lanches.module').then( m => m.LanchesPageModule)
  },
  {
    path: 'sobremesas',
    loadChildren: () => import('./categs/sobremesas/sobremesas.module').then( m => m.SobremesasPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./categs/bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
