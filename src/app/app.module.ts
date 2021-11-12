import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CreateProductModal } from './components/create-product-modal';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductModal
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
