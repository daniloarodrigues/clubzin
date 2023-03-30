import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    HeaderComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [
    ErrorDialogComponent,
    HeaderComponent,
    MatDialogModule,
    MatCardModule
  ]
})
export class SharedModule { }
