import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipinginfoComponent } from './pipinginfo/pipinginfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CustomdirectiveDirective } from './customdirective.directive';
import { EditPipinginfoComponent } from './edit-pipinginfo/edit-pipinginfo.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CmlInfoComponent } from './CML/cml-info/cml-info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PipinginfoComponent,
    CustomdirectiveDirective,
    EditPipinginfoComponent,
    CmlInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
