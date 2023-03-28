import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FloatMenuComponent } from './float-menu/float-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FloatMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
