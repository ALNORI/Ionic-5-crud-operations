import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductAddPageRoutingModule } from './product-add-routing.module';

import { ProductAddPage } from './product-add.page';
import {MatInputModule,
MatPaginatorModule,
MatProgressSpinnerModule,
MatSortModule,
MatTableModule,
MatIconModule,
MatButtonModule,
MatCardModule,
MatFormFieldModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, ProductAddPageRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
    
  ],
  declarations: [ProductAddPage]
})
export class ProductAddPageModule {}
