import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { VInputComponent } from './v-input/v-input.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    // FormsModule
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    // VInputComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    // VInputComponent,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
