import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { SharedModule } from '../app/shared/shared.module';
import { CustomDatePipe  } from './pipe_filter/date-filter.pipe';
// import { SurgeEditComponent } from './pages/surge-edit/surge-edit.component';
// import { SearchPipe } from './helpers/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CustomDatePipe,
    
    // SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    // GoogleMapsModule
    // SharedModule
    // ButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CustomDatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
