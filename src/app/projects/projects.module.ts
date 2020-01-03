import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProjectsPage } from './projects.page';

import { IonicModule } from '@ionic/angular';
import { ProjectsPageRoutingModule } from './projects-routing.module';
import { ProjectsListPage } from './projects-list/projects-list.page';
import { ProjectDetailsPage } from './project-details/project-details.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    MaterialModule,
    ProjectsPageRoutingModule
  ],
  declarations: [ ProjectDetailsPage, ProjectsListPage, ProjectsPage]
})
export class ProjectsPageModule {}
