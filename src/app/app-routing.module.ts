import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {path: 'project-details', loadChildren: () => import('./projects/project-details/project-details.module').then(m => m.ProjectDetailsPageModule)},
  {path: 'projects-list', loadChildren: () => import('./projects/projects-list/projects-list.module').then(m => m.ProjectsListPageModule)},
  {path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
