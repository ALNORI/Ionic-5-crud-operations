import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

import { IonicModule } from '@ionic/angular';

import { ProjectsListPageRoutingModule } from './projects-list-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,

    ProjectsListPageRoutingModule
  ],
  declarations: []
})
export class ProjectsListPageModule {}
